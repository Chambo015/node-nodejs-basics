import { readFile } from 'fs/promises'
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
    const { createHash } = await import('crypto');
      
    const hash = createHash('sha256');
    
    hash.on('readable', () => {
        const data = hash.read();
        if (data) {
            console.log(data.toString('hex'));
        }
    });

    try {
        const data = await readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf-8')
        hash.write(data);
        hash.end();
    } catch (error) {
        throw new Error('FS operation failed')
    }
};