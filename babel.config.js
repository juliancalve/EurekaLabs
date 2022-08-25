module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './app',
          '@components': './app/components',
          '@screens': './app/screens',
          '@constants': './app/constants',
          '@hooks': './app/hooks',
          '@context': './app/context',
          '@navigations': './app/navigations',
          '@interfaces': './app/interfaces',
        }
      }
    ],
    'react-native-paper/babel'
  ]
};