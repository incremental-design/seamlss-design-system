export interface NxPluginSketchGeneratorSchema {
  name: string;
  description: string;
  publicUrl: string;
  endpoint: string;
  bucket: string;
  accessKeyId: string;
  secretAccessKey: string;
  tags?: string;
  directory?: string;
}
