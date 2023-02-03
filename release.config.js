const { default: semanticRelease } = require("semantic-release");

const config = {
  branches: ["main"],
  Plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/git",
      {
        assets: ["dist/*js", "dist/*.js.map"],
        message: `chore(release): ${nextRelease.version} [skip cli]\n\n${nextRelease.notes}`,
      },
    ],
    "@semantic-release/github",
  ],
};

module.exports = config;
