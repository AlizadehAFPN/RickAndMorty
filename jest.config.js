module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': require.resolve('babel-jest'),
  },
  moduleNameMapper: {
    '^react-native-vector-icons/AntDesign$':
      '<rootDir>/__mocks__/react-native-vector-icons.js',
    'react-native-image-progress':
      '<rootDir>/__mocks__/react-native-image-progress.js',
    'react-native-progress':
      '<rootDir>/__mocks__/react-native-image-progress.js',
  },
};
