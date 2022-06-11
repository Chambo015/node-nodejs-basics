import { createReadStream } from 'fs'
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    const rs = createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'))
    rs.pipe(process.stdout)
    rs.on('end', () => {
        process.stdout.write('\nThere will be no more data.')
    })
};
read()