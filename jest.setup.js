const shell = require('shelljs');

const testDir = '/tmp/dev-cli';

beforeAll(() => {
  shell.mkdir(testDir);
  global.testDir = testDir;
});

afterAll(() => {
  shell.rm('-rf', testDir);
  delete global.testDir;
});
