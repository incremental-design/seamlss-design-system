import { ExecutorContext, names} from '@nrwl/devkit';
import { PublishExecutorSchema } from './schema';
import path from 'path'
import AWS from 'aws-sdk'
import { readFile, writeFile } from "fs/promises"
import { parseStringPromise, Builder  } from 'xml2js'
import dotenv from 'dotenv'


export default async function runExecutor(options: PublishExecutorSchema, context: ExecutorContext) {

  const { root } = context.workspace.projects[context.projectName];

  const {className} = names(root.split(path.sep).pop())

  const [feed, library, thumbnail] = ['xml','sketch','jpg'].map(ext => (path.resolve(context.root, root, 'src', `${className}.${ext}`)))

  const {endpoint, bucket} = options

  const {accessKeyId, secretAccessKey} = dotenv.config({path: path.resolve(context.root, root, '.env')}).parsed

  AWS.config.update({
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  })

  const s3 = new AWS.S3({endpoint});

  const Bucket = bucket;

  const getKey = (file: string) => path.parse(file).base;

  const incrementFeed = async () => {

    const s = (await readFile(feed)).toString()
    const contents = await parseStringPromise(s);

    contents.rss.channel[0].item[0].pubDate[0] = new Date().toUTCString()

    const v = Number(contents.rss.channel[0].item[0].enclosure[0]['$']['sparkle:version'])

    contents.rss.channel[0].item[0].enclosure[0]['$']['sparkle:version'] = v + 1

    const builder = new Builder();

    const newXml = builder.buildObject(contents);

    await writeFile(feed, newXml)
  }

  const deleteIfExist = (file: string) => new Promise<void>((resolve, reject) => {
    const Key = getKey(file);

    s3.headObject({Bucket, Key}, (err) => {
      if(err){
        if(err.code === 'NotFound'){
          resolve()
        } else {
        console.error(err);
        reject();
       }
      }
      else {
        s3.deleteObject({Bucket, Key}, (err) => {
          if(err){
            console.error(err);
            reject()
          } else {
            resolve()
          }
        })
      }
  })
  })

  const upload = async (file: string) => {

    const Key = getKey(file);
    const Body = await readFile(file);

    return new Promise<void>((resolve, reject) => {

      const ACL = 'public-read'

      s3.upload({Bucket, Key, Body, ACL},(err, data) => {
        if(err) {
          console.error(err)
          reject()
        } else{
          console.log(`Uploaded ${Key} to ${data.Location}`)
          resolve()
        }
      })
    })
  }




  await incrementFeed();

  await Promise.all([feed, library, thumbnail].map(async(file) => await deleteIfExist(file)))
  await Promise.all([feed, library, thumbnail].map(async(file) => await upload(file)))

  return {
    success: true,
  };
}
