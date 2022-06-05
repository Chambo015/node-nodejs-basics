import { readdir, mkdir, copyFile } from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export const copy = async () => {
  try {
    const files = await readdir(path.join(__dirname, 'files'))
    await mkdir(path.join(__dirname, 'files' + '_copy'))
    await Promise.all(files.map(async (f) => {
      await copyFile(path.join(__dirname, 'files', f), path.join(__dirname, 'files_copy', f))
    }))
  } catch (e) {
    throw new Error('FS operation failed')
  }
};
