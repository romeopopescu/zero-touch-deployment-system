import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', 
});

const customJestConfig = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': './app/components/$1',
  },
};

module.exports = createJestConfig(customJestConfig);