# Git Command Cheatsheet - Fast-Paced with Hacks & Tips

## Basic Commands

```bash
git init                     # Initialize repo
git clone <url>              # Clone repository
git add .                    # Stage all changes
git add -A                   # Stage all (including deletions)
git commit -m "message"      # Commit with message
git push                     # Push to remote
git pull                     # Fetch + merge
git status                   # Check working tree status
git log                      # Show commit history
```

## Branching & Merging

```bash
git branch                   # List branches
git branch <name>            # Create branch
git checkout <branch>        # Switch branch
git checkout -b <branch>     # Create + switch branch
git switch <branch>          # Modern way to switch (Git 2.23+)
git switch -c <branch>       # Create + switch (modern)
git merge <branch>           # Merge branch into current
git branch -d <branch>       # Delete branch (safe)
git branch -D <branch>       # Force delete branch
```

## Remote Operations

```bash
git remote -v                # List remotes
git remote add origin <url>  # Add remote
git push -u origin main      # Push + set upstream
git push --force-with-lease  # Safe force push
git fetch                    # Download without merging
git pull --rebase            # Pull with rebase instead of merge
```

## Viewing Changes & History

```bash
git diff                     # Show unstaged changes
git diff --staged            # Show staged changes
git diff HEAD~1              # Compare with previous commit
git log --oneline            # Compact log
git log --graph --oneline    # Visual branch history
git log -p                   # Show patches (actual changes)
git log --since="2 weeks"    # Filter by date
git log --author="name"      # Filter by author
git show <commit>            # Show specific commit details
git blame <file>             # See who changed what line
```

## Undoing Changes

```bash
git restore <file>           # Discard working changes (Git 2.23+)
git checkout -- <file>       # Discard working changes (old way)
git restore --staged <file>  # Unstage file
git reset HEAD <file>        # Unstage file (old way)
git reset --soft HEAD~1      # Undo commit, keep changes staged
git reset --hard HEAD~1      # Undo commit, discard changes
git revert <commit>          # Create new commit that undoes another
git clean -f                 # Remove untracked files
git clean -fd                # Remove untracked files + directories
```

## Commit Manipulation

```bash
git commit --amend           # Edit last commit message
git commit --amend --no-edit # Add changes to last commit
git rebase -i HEAD~3         # Interactive rebase last 3 commits
git cherry-pick <commit>     # Apply specific commit
git commit --fixup <commit>  # Create fixup commit for autosquash
git rebase -i --autosquash   # Auto-squash fixup commits
```

## Stashing

```bash
git stash                    # Stash current changes
git stash push -m "message"  # Stash with message
git stash list               # List stashes
git stash pop                # Apply + delete latest stash
git stash apply              # Apply stash without deleting
git stash drop               # Delete stash
git stash show -p            # Show stash diff
```

## Advanced Operations

```bash
git bisect start             # Start binary search for bug
git bisect bad               # Mark current as bad
git bisect good <commit>     # Mark commit as good
git worktree add <path> <branch>  # Create separate working directory
git reflog                   # Show reference log (recover lost commits)
git fsck --lost-found        # Find dangling commits
```

## Configuration & Aliases

```bash
git config --global user.name "Name"
git config --global user.email "email@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase true
git config --global rebase.autoStash true

# Useful aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
git config --global alias.pushf 'push --force-with-lease'
git config --global alias.lg 'log --oneline --graph --all'
```

## Power User Hacks & Tips

### 1. Quick Commit All Changes
```bash
git commit -am "message"     # Add + commit in one go
```

### 2. Undo Last Commit but Keep Changes
```bash
git reset --soft HEAD~1      # Perfect for fixing commit messages
```

### 3. Interactive Add (Choose What to Stage)
```bash
git add -p                   # Patch mode - choose hunks to stage
```

### 4. Find When Bug Was Introduced
```bash
git bisect start HEAD v1.0   # Binary search between HEAD and v1.0
```

### 5. Temporarily Switch Branch Without Committing
```bash
git stash && git checkout <branch> && git stash pop
```

### 6. Create Empty Commit (Useful for CI Triggers)
```bash
git commit --allow-empty -m "trigger CI"
```

### 7. Show Files Changed in Commit
```bash
git diff-tree --no-commit-id --name-only -r <commit>
```

### 8. Search Commit Messages
```bash
git log --grep="keyword"     # Find commits with keyword in message
git log -S "function_name"   # Find commits that added/removed code
```

### 9. Ignore File Changes Temporarily
```bash
git update-index --skip-worktree <file>    # Ignore local changes
git update-index --no-skip-worktree <file> # Stop ignoring
```

### 10. Sync Fork with Upstream
```bash
git remote add upstream <original-repo-url>
git fetch upstream
git checkout main
git merge upstream/main
```

### 11. Squash Multiple Commits into One
```bash
git reset --soft HEAD~3      # Reset 3 commits but keep changes
git commit -m "Clean commit message"
```

### 12. Find Large Files in History
```bash
git rev-list --objects --all | git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | awk '/^blob/ {print substr($0,6)}' | sort --numeric-sort --key=2 | tail -10
```

### 13. Backup Current Branch
```bash
git branch backup-$(date +%Y%m%d-%H%M%S)
```

### 14. Show Git Aliases
```bash
git config --get-regexp alias
```

### 15. Checkout Previous Branch
```bash
git checkout -               # Like cd -
```

## Emergency Commands

### Recover Deleted Branch
```bash
git reflog                   # Find the commit hash
git checkout -b <branch-name> <commit-hash>
```

### Recover Deleted Commits
```bash
git reflog                   # Find lost commit
git cherry-pick <commit-hash>
```

### Reset to Remote State
```bash
git fetch origin
git reset --hard origin/main
```

### Remove Sensitive Data from History
```bash
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch <file>' \
--prune-empty --tag-name-filter cat -- --all
```

## Pro Tips

1. **Use `--force-with-lease` instead of `--force`** - safer force push
2. **Set up global `.gitignore`** for OS/editor files
3. **Use SSH keys** instead of HTTPS for authentication
4. **Enable autostash** for rebase: `git config --global rebase.autoStash true`
5. **Use conventional commits** for better history
6. **Set up GPG signing** for verified commits
7. **Use `git maintenance start`** for large repos (Git 2.29+)
8. **Learn regex patterns** for advanced git log filtering

## Keyboard Shortcuts in Git Pager

- `q` - Quit
- `/pattern` - Search forward
- `?pattern` - Search backward
- `n` - Next search result
- `N` - Previous search result
- `Space` - Page down
- `b` - Page up

Remember: Git is immutable - almost nothing is permanently lost if you know where to look!