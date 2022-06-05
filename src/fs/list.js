import { readdir } from 'fs/promises'
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
    try {
        const arrFiles = await readdir(path.join(__dirname, 'files'))
        console.log(arrFiles);
    } catch (error) {
        throw new Error('FS operation failed')
    }
};