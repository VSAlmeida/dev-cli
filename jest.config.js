const { name } = require('./package.json');

module.exports = {
  displayName: name,
  clearMocks: true,
  verbose: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
