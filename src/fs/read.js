import { readFile } from 'fs/promises'
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
    try {
        const data = await readFile(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf-8')
        console.log(data)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};