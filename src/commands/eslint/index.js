const shell = require('shelljs');
const { cli } = require('src/config');
const { logger } = require('src/helpers');

cli
  .command('eslint')
  .description('collection of eslint automations')
  .helpOption('-h, --help', 'Display help for eslint command')
  .option('-i, --init', 'Initialize eslint')
  .action((options) => {
    if (Object.keys(options).length === 0) {
      shell.exec('dev eslint -h');
      return;
    }

    if (!shell.test('-f', `${shell.pwd()}/package.json`)) {
      logger.error('Error: Could not find package.json');
      logger.warning(
        'This command must be run on root directory from your project'
      );
    }
  });

module.exports = cli;
