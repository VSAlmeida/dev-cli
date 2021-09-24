#!/usr/bin/env node

const { cli } = require('./config');

// export all commands
require('./commands');

cli.parse(process.argv);
