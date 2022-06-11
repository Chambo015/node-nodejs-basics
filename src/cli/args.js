export const parseArgs = () => {
    let consoleArg = ''

    for(let i = 2; i < process.argv.length; i++) {
        if(i % 2 == 0) {
            consoleArg += process.argv[i] + ' is '
        } else if(i + 1 != process.argv.length) {
            consoleArg += process.argv[i] + ', '
        } else {
            consoleArg += process.argv[i]
        }
    }

    console.log(consoleArg);
};
parseArgs()