// Releases are tags plus GitHub Releases only. Nothing is committed back to
// master, which only accepts changes through pull requests.
module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
  preset: 'angular',
};
