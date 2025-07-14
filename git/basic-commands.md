# Essential Git Commands

## Basic Operations


`git pull --rebase origin main`
- Fetches changes from the 'main' branch and rebases your local commits on top, avoiding merge commits

`git push --force-with-lease`
- Force pushes changes while ensuring you don't overwrite others' work (safer than `--force`)

`git reset --hard HEAD`
- Discards all uncommitted changes in your working directory

## Staging and Committing

`git add -p`
- Interactively choose parts of files to stage, allowing for more granular commits

`git commit --amend`
- Modifies your most recent commit (message and/or content)

`git stash`
- Temporarily saves uncommitted changes to work on something else

`git stash pop`
- Applies and removes the most recently stashed changes

## Branching

`git checkout -b branch-name`
- Creates and switches to a new branch in one command

`git branch -d branch-name`
- Deletes a branch after it's been merged

`git merge --no-ff branch-name`
- Merges a branch while preserving branch history

## History and Inspection

`git log --oneline --graph`
- Displays commit history as a graph with one-line summaries

`git blame file.txt`
- Shows who last modified each line in a file

`git diff`
- Shows unstaged changes between your working directory and staging 
