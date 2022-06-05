import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
    try {
        await fs.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'))
    } catch (error) {
        throw new Error('FS operation failed')
    }
};