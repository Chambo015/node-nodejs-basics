import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async () => {
    const readable = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const writable = createWriteStream(path.join(__dirname, 'files', 'archive.gz'))
    const gzip = createGzip()
    readable.pipe(gzip).pipe(writable)
};

compress()