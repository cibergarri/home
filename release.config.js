// master only accepts pull requests, so nothing is pushed to it here: this
// tags the release and publishes it on GitHub, and leaves the updated
// CHANGELOG.md and package.json in the working tree for the workflow to open
// as a "chore(release)" pull request.
module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
      },
    ],
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/github',
  ],
  preset: 'angular',
};
