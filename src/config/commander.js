const cli = require('commander');
const { version } = require('../../package.json');

cli.version(`v${version}`, '-v, --version', 'output the current version');

module.exports = cli.program;
