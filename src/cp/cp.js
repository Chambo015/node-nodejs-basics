import { spawn, fork } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const spawnChildProcess = async (args) => {
    // Use spawn
    /* 
    const child = spawn('node', [path.resolve(__dirname, 'files', 'script.js'), ...args])
    process.stdin.on('data', chunk => {
        child.stdin.write(chunk)
    })
    child.stdout.on('data', chunk => {
        process.stdout.write(chunk.toString())
    }) 
    */

    // Use fork
    const child = fork(path.resolve(__dirname, 'files', 'script.js'), args, { stdio: 'pipe'})
    process.stdin.on('data', chunk => {
        child.stdin.write(chunk)
    })
    child.stdout.on('data', chunk => {
        process.stdout.write(chunk.toString())
    })
};
spawnChildProcess(process.argv.slice(2))