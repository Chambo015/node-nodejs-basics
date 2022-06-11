import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs'
import { createGunzip } from 'zlib'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
    const readable = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
    const writable = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'))
    const gzip = createGunzip()
    readable.pipe(gzip).pipe(writable)
};
decompress()