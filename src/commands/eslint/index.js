const shell = require('shelljs');
const { cli } = require('src/config');

cli
  .command('eslint')
  .description('collection of eslint automations')
  .helpOption('-h, --help', 'Display help for eslint command')
  .action((options) => {
    if (Object.keys(options).length === 0) {
      shell.exec('dev eslint -h');
    }
  });

module.exports = cli;
