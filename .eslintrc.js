module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    '__webpack_public_path__': true,
    after: true,
    afterEach: true,
    before: true,
    beforeEach: true,
    context: true,
    describe: true,
    document: true,
    Image: true,
    it: true,
    navigator: true,
    window: true,
  },
  plugins: [
    'react',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-find-dom-node': 'off',
    'react/no-string-refs': 'off',
    'jsx-a11y/label-has-for': 'off',
  }
};
