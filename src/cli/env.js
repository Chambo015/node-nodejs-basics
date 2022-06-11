let regexp = /^RSS_/i;

export const parseEnv = () => {
    let RSS_ENV = Object.keys(process.env)
    .filter(key => regexp.test(key))
    .map(key => `${key}=${process.env[key]}`)
    .join('; ')

    console.log(RSS_ENV);
};
parseEnv()