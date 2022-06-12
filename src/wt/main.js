import { cpus } from 'os';
import { Worker } from 'worker_threads'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const performCalculations = async () => {
    let nth = 10;
    const arrayOfResults = await Promise.allSettled(cpus().map(() => {
            return new Promise((resolve, reject) => {
                const worker = new Worker(path.resolve(__dirname, './worker.js'), {
                    workerData: nth++
                });
                worker.on('message', msg => {
                    resolve({
                        status: 'resolved',
                        data: msg
                    })
                    
                })
                worker.on('error', e => {
                    reject({
                        status: 'error',
                        data: null
                    })
                })
            })
        }
    )) 
    const parseResult = arrayOfResults.map(e => e.value)
    console.log(parseResult);
    
};
performCalculations()