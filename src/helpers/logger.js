const chalk = require('chalk');

// eslint-disable-next-line
const log = console.log;

const info = (msg, color = '#F8F8F2') => {
  log(chalk.hex(color)(msg));
};

const success = (msg, color = '#50FA7B') => {
  log(chalk.hex(color)(msg));
};

const warning = (msg, color = '#F1FA8C') => {
  log(chalk.hex(color)(msg));
};

const error = (msg, color = '#FF5555') => {
  log(chalk.hex(color)(msg));
};

const custom = (msg) => {
  log(msg);
};

module.exports = { info, success, warning, error, custom };
