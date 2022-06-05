export const parseArgs = () => {
    let consoleArg = ''

    for(let i = 2; i < process.argv.length; i++) {
        if(i % 2 == 0) {
            arrArg += process.argv[i] + ' is '
        } else if(i + 1 != process.argv.length) {
            arrArg += process.argv[i] + ', '
        } else {
            arrArg += process.argv[i]
        }
    }

    console.log(consoleArg);
};