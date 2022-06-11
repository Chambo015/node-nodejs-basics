import { Transform, pipeline } from 'stream'
export const transform = async () => {
    const readableFromTerminal = process.stdin
    const writableToTerminal = process.stdout

    const transform = new Transform({
        transform(chunk, encoding, callback) {
            let strRevers = chunk.toString().trim().split('').reverse().join('');
            this.push(strRevers + '\n')
            callback()
        }
    })
    pipeline(readableFromTerminal,
        transform,
        writableToTerminal,
        err => {
            if (err) throw err
        })
};
transform()