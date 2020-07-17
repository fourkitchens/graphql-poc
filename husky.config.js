module.exports = {
  hooks: {
    'commit-msg': 'yarn commitlint',
    'pre-commit': 'yarn lint-staged',
    'pre-push': 'yarn lint-staged ; yarn test',
  },
};
