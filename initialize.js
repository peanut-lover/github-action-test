import * as core from "@actions/core";
import * as github from "@actions/github";

export const initialize = () => {
  global.owner = github.context.repo.owner;
  global.repo = github.context.repo.repo;

  const githubToken = core.getInput("GH_TOKEN", { required: true });
  if (!githubToken) {
    throw new Error("Missing GH_TOKEN environment variable");
  }
  const octokit = github.getOctokit(githubToken);

  global.octokit = octokit;

  console.log(`Successfully initialized.`);
  console.log(`global ower: ${JSON.stringify(global.owner)} `);
  console.log(`global repo: ${JSON.stringify(global.repo)} `);
};
