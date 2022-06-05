import { existsSync } from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let oldFile = path.join(__dirname, 'files', 'wrongFilename.txt');
let newFile = path.join(__dirname, 'files', 'properFilename.md');

export const rename = async () => {
  try {
    if(existsSync(newFile)) throw new Error('FS operation failed');
    await fs.rename(oldFile, newFile);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};
