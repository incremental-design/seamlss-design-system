import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { NxPluginSketchGeneratorSchema } from './schema';
import { readFile } from 'fs/promises';


interface NormalizedSchema extends NxPluginSketchGeneratorSchema {
  projectName: string;
  className: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
  initialPubDate: string;
}

function normalizeOptions(
  tree: Tree,
  options: NxPluginSketchGeneratorSchema
): NormalizedSchema {
  const {fileName, className} = names(options.name);
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${fileName}`
    : fileName;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  const initialPubDate = new Date().toUTCString();

  return {
    ...options,
    projectName,
    className,
    projectRoot,
    projectDirectory,
    parsedTags,
    initialPubDate
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  );
}

export default async function (
  tree: Tree,
  options: NxPluginSketchGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(tree, options);
  const root = normalizedOptions.projectRoot
  const sourceRoot = `${normalizedOptions.projectRoot}/src`

  addProjectConfiguration(tree, normalizedOptions.projectName, {
    root,
    projectType: 'library',
    sourceRoot,
    targets: {
      "publish-sketch-library": {
        executor: '@incremental.design/nx-plugin-sketch:publish-sketch-library',
        options: {
          endpoint: options.endpoint,
          bucket: options.bucket
        }
      },
    },
    tags: normalizedOptions.parsedTags,
  });
  addFiles(tree, normalizedOptions);

  await formatFiles(tree);

  /* we HAVE to do this, because for some weird reason the nx template variables corrupt the file */
  const from = path.resolve(__dirname, 'library.sketch')
  const to = path.join(sourceRoot, `${normalizedOptions.className}.sketch`)
  await tree.write(to, await readFile(from))

  /* finally, drop the encoded url into a readme */
  const url = 'sketch://add-library?url=' + encodeURIComponent(`https://${normalizedOptions.publicUrl}/${normalizedOptions.className}.xml`)

  console.log(url)

  await tree.write(path.join(root, 'readme.md'), Buffer.from(url, 'utf-8'))
}
