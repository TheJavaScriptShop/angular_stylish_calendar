const { default: semanticRelease } = require("semantic-release");

const config = {
  branches: ["main"],
  Plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};

module.exports = config;
