/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-restricted-syntax */
module.exports = {
  branch: 'master',
  debug: true,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
      },
    ],
    [
      '@semantic-release/npm', {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: 'pack/*.tgz',
      },
    ],
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/exec',
      {
        publishCmd: 'echo ${nextRelease.version} ${options.branch} ${commits.length} ${Date.now()}',
      },
    ],
  ],
  preset: 'angular',
};
