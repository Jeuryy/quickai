declare module "pdf-parse" {
  function pdf(dataBuffer: Buffer): Promise<{
    numpages: number;
    numrender: number;
    info: unknown;
    metadata: unknown;
    version: string;
    text: string;
  }>;

  export default pdf;
}
