import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let text = 'I am fresh and young'

export const create = async () => {
    fs.writeFile(path.join(__dirname, 'files', 'fresh.txt'),
    text, {
        flag: 'wx'
    },
    err => {
        if (err) throw err 
    })
};