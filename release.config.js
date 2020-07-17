module.exports = {
  branches: ['master'],
  repositoryUrl: 'git@github.com:patrickocoffeyo/wombo.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
