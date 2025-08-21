
`git worktree add <path> <branch>`
This command creates a new worktree at the specified `<path>` and checks out the specified `<branch>`. If the branch does not exist, it will be created based on the current HEAD. This allows you to work on multiple branches simultaneously without needing to switch back and forth in your main working directory.
`git worktree list`
This command lists all the worktrees associated with the current repository, showing their paths and the branches they are checked out to. It helps you keep track of all the worktrees you have created.
`git worktree remove <path>`
This command removes the worktree located at `<path>`. It will not delete the branch associated with the worktree; it only removes the worktree itself. If you want to delete the branch, you will need to do that separately using `git branch -d <branch>` or `git branch -D <branch>` if you want to force delete it.
`git worktree prune`
This command cleans up any worktrees that are no longer valid, such as those that have been removed but still have references in the repository. It helps maintain a clean state by removing stale worktree references.
`git worktree lock <path>`
This command locks the specified worktree at `<path>`, preventing any changes to it until it is unlocked. This can be useful if you want to ensure that no accidental changes are made while you are working in another worktree.
`git worktree unlock <path>`
This command unlocks the specified worktree at `<path>`, allowing changes to be made again. It is the counterpart to the `git worktree lock` command and is used to resume normal operations on the worktree.
`git worktree status`