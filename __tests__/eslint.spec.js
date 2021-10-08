const shell = require('shelljs');

describe('the "dev eslint" command canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('the "dev eslint" should', () => {
  it('print the help command when no options is provided', () => {
    const result = shell.exec('dev eslint', { silent: true });

    expect(result).toEqual(
      expect.stringContaining('Usage: dev eslint [options]')
    );
  });

  it('print the help command when the "-h" option is provided', () => {
    const result = shell.exec('dev eslint -h', { silent: true });

    expect(result).toEqual(
      expect.stringContaining('Usage: dev eslint [options]')
    );
  });

  it('print the help command when the "--help" option is provided', () => {
    const result = shell.exec('dev eslint --help', { silent: true });

    expect(result).toEqual(
      expect.stringContaining('Usage: dev eslint [options]')
    );
  });

  it.todo(
    'print an error message when the "-i" option is provided in a dir without package.json'
  );

  it.todo(
    'print an error message when the "--init" option is provided in a dir without the package.json'
  );

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
