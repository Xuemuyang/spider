const yargs = require('yargs');
const screenshot = require('./screenshot');
const mn = require('./mn');

const argv = yargs
    .usage('anydoor [options]')
    .option('a', {
        alias: 'address',
        describe: '获取网页快照',
        default: 'https://baidu.com'
    })
    .option('c', {
        alias: 'content',
        describe: '获取相关图片',
        default: '提莫'
    })
    .version()
    .alias('v', 'version')
    .help()
    .argv;

if (argv.a !== 'https://baidu.com') {
    screenshot(argv.a);
    return ;
}

if (argv.c !== '提莫') {
    mn(argv.c);
}