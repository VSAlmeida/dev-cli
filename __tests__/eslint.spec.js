const shell = require('shelljs');

let testDir = '';

describe('the "dev eslint" command canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('the "dev eslint" should', () => {
  beforeAll(() => {
    testDir = `${global.testDir}/eslint`;

    shell.mkdir(testDir);
  });

  it('print the help command when no options is provided', () => {
    const result = shell.exec('dev eslint', { silent: true });

    expect(result).toEqual(
      expect.stringContaining('Usage: dev eslint [options]')
    );
  });

  it('print the help command when the option "-h" or "-help" is provided', () => {
    const options = ['--help', '-h'];

    options.forEach((option) => {
      const result = shell.exec(`dev eslint ${option}`, { silent: true });

      expect(result).toEqual(
        expect.stringContaining('Usage: dev eslint [options]')
      );
    });
  });

  it('print an error message when the option "-i" or "--init" is provided in a dir without package.json', () => {
    const options = ['--init', '-i'];

    options.forEach((option) => {
      const result = shell.exec(`cd ${testDir} && dev eslint ${option}`, {
        silent: true,
      });

      expect(result).toEqual(
        expect.stringContaining('Error: Could not find package.json')
      );
    });
  });

  it.todo(
    'install and configure the eslint when the "--init" option is provided in a dir with the package.json'
  );

  it.todo(
    'install and configure the eslint when the "-i" option is provided in a dir with the package.json'
  );

  it.todo('open the config file when the "-c" option is provided');

  it.todo('open the config file when the "--config" option is provided');

  it.todo('print an error message when unknown option is provided');
});
