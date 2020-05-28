import {message, danger} from "danger"

var pr = danger.github.pr

// Add a CHANGELOG entry for app changes
const hasChangelog = danger.git.modified_files.includes("changelog.md")
const isTrivial = (pr.body + pr.title).includes("#trivial")

if (!hasChangelog && !isTrivial) {
  warn("Please add a changelog entry for your changes.")
}


var bigPRThreshold = 600;
if (pr.additions + pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR (' + ++errorCount + ')');
  markdown('> (' + errorCount + ') : Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.');
}

// Always ensure we assign someone, so that our Slackbot can do its work correctly
if (pr.assignee === null) {
  fail("Please assign someone to merge this PR, and optionally include people who should review.")
}
