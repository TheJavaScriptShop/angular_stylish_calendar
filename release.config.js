const config = {
  branches: ["main"],
  Plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
  ],
};

module.exports = config;
