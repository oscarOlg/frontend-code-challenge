module.exports = {
    testPathIgnorePatterns: ['<rootDir>/node_modules'], // might want?
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'] 
  };