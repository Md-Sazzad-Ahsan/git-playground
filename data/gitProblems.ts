const gitProblems = [
  {
    id: 1,
    problem: "How to undo the last Git commit without losing changes",
    solution:
      "Use `git reset --soft HEAD~1` to undo the last commit while keeping your changes staged. For complete undo including staged changes, use `git reset HEAD~1`.",
  },
  {
    id: 2,
    problem: "How to completely discard local changes in Git",
    solution:
      "Run `git reset --hard` to discard all uncommitted changes. Warning: This permanently deletes all unstaged changes. For selective discard, use `git checkout -- <file>`.",
  },
  {
    id: 3,
    problem: "Resolving Git merge conflicts step-by-step",
    solution:
      "1. Run `git status` to identify conflicts\n2. Open conflicted files and look for `<<<<<<<` markers\n3. Edit to keep desired changes\n4. Remove conflict markers\n5. `git add` the resolved files\n6. Complete with `git commit`",
  },
  {
    id: 4,
    problem: "How to change the last Git commit message",
    solution:
      "Use `git commit --amend` to edit the most recent commit message. For pushed commits, use `git push --force` afterward (caution: alters history).",
  },
  {
    id: 5,
    problem: "How to delete a local Git branch safely",
    solution:
      "Use `git branch -d branch_name` for merged branches. For unmerged branches, use `git branch -D branch_name`. Verify with `git branch` afterward.",
  },
  {
    id: 6,
    problem: "How to recover deleted Git branch with commits",
    solution:
      "1. Find the branch's last commit with `git reflog`\n2. Create new branch: `git branch branch_name commit_hash`\n3. Verify with `git log`",
  },
  {
    id: 7,
    problem: "How to set up Git username and email globally",
    solution:
      'Configure globally with:\n`git config --global user.name "Your Name"`\n`git config --global user.email "your@email.com"`\nVerify with `git config --list`',
  },
  {
    id: 8,
    problem: "How to clone a specific Git branch from repository",
    solution:
      "Use `git clone -b branch_name --single-branch repo_url` to clone only the specified branch, saving bandwidth and time.",
  },
  {
    id: 9,
    problem: "How to ignore files in Git using .gitignore",
    solution:
      "1. Create `.gitignore` file in root directory\n2. Add file patterns (e.g., `*.log`, `node_modules/`)\n3. Use `git rm --cached file_name` for already tracked files",
  },
  {
    id: 10,
    problem: "How to update forked repository with upstream changes",
    solution:
      "1. Add upstream: `git remote add upstream original_repo_url`\n2. Fetch: `git fetch upstream`\n3. Merge: `git merge upstream/main`\n4. Push: `git push origin main`",
  },
  {
    id: 11,
    problem: "How to squash multiple Git commits into one",
    solution:
      "Use interactive rebase: `git rebase -i HEAD~n` (n=number of commits)\nMark all but first commit with 'squash'\nSave and edit final commit message",
  },
  {
    id: 12,
    problem: "How to view Git commit history with changes",
    solution:
      "Use `git log -p` to show commit history with diffs. For compact view: `git log --oneline --graph --decorate --all`",
  },
  {
    id: 13,
    problem: "How to create and switch to new Git branch",
    solution:
      "Create and switch with `git checkout -b new_branch_name`. For remote tracking: `git push -u origin new_branch_name`",
  },
  {
    id: 14,
    problem: "How to stash Git changes temporarily",
    solution:
      'Save changes with `git stash` or `git stash save "message"`\nList stashes: `git stash list`\nApply: `git stash apply stash@{n}`\nClear: `git stash clear`',
  },
  {
    id: 15,
    problem: "How to resolve Git detached HEAD state",
    solution:
      "1. Create new branch: `git branch temp_branch`\n2. Checkout: `git checkout temp_branch`\n3. Merge if needed\nAlternative: `git checkout -` to return to previous branch",
  },
  {
    id: 16,
    problem: "How to compare changes between branches in Git",
    solution:
      "Use `git diff branch1..branch2` to see differences between branches. For specific files: `git diff branch1:file branch2:file`",
  },
  {
    id: 17,
    problem: "How to rename a local Git branch",
    solution:
      "1. Switch to branch: `git checkout old_name`\n2. Rename: `git branch -m new_name`\n3. Push new branch: `git push origin -u new_name`\n4. Delete old remote: `git push origin --delete old_name`",
  },
  {
    id: 18,
    problem: "How to find which Git commit introduced a bug",
    solution:
      "Use `git bisect`:\n1. Start: `git bisect start`\n2. Mark bad commit: `git bisect bad`\n3. Mark good commit: `git bisect good commit_hash`\n4. Git will binary search between commits",
  },
  {
    id: 19,
    problem: "How to revert a specific Git commit",
    solution:
      "Use `git revert commit_hash` to create a new commit that undoes the changes. For multiple commits: `git revert oldest_hash..newest_hash`",
  },
  {
    id: 20,
    problem: "How to clean untracked files in Git",
    solution:
      "Use `git clean`:\n- Dry run: `git clean -n`\n- Remove files: `git clean -f`\n- Remove directories: `git clean -fd`\n- Include ignored files: `git clean -fx`",
  },
  {
    id: 21,
    problem: "How to change Git remote repository URL",
    solution:
      "1. View current remotes: `git remote -v`\n2. Change URL: `git remote set-url origin new_url`\n3. Verify: `git remote -v`",
  },
  {
    id: 22,
    problem: "How to list all Git remote branches",
    solution:
      "Use `git branch -r` for remote branches or `git branch -a` for all branches. With details: `git show-branch -a`",
  },
  {
    id: 23,
    problem: "How to pull specific branch from remote in Git",
    solution:
      "1. Fetch branch: `git fetch origin branch_name`\n2. Checkout: `git checkout branch_name`\nOr combined: `git checkout -b branch_name origin/branch_name`",
  },
  {
    id: 24,
    problem: "How to delete a remote Git branch",
    solution:
      "Use `git push origin --delete branch_name` or the shorter `git push origin :branch_name`",
  },
  {
    id: 25,
    problem: "How to create Git tags for releases",
    solution:
      '1. Lightweight tag: `git tag v1.0`\n2. Annotated tag: `git tag -a v1.0 -m "Release 1.0"`\n3. Push tags: `git push origin --tags` or specific tag: `git push origin v1.0`',
  },
  {
    id: 26,
    problem: "How to list all Git tags",
    solution:
      'Use `git tag` to list all tags. With details: `git show-ref --tags` or `git tag -l "v1.*"` for pattern matching',
  },
  {
    id: 27,
    problem: "How to delete Git tags locally and remotely",
    solution:
      "1. Delete local tag: `git tag -d v1.0`\n2. Delete remote tag: `git push origin --delete v1.0` or `git push origin :refs/tags/v1.0`",
  },
  {
    id: 28,
    problem: "How to checkout a Git tag into a branch",
    solution:
      "Create new branch from tag: `git checkout -b new_branch v1.0` where v1.0 is your tag name",
  },
  {
    id: 29,
    problem: "How to see changes in a Git commit",
    solution:
      "Use `git show commit_hash` to view commit details and changes. For just the diff: `git diff commit_hash^!`",
  },
  {
    id: 30,
    problem: "How to find Git commits by message content",
    solution:
      'Use `git log --grep="search term"` to find commits containing specific text in their messages. Case-insensitive: `git log -i --grep="term"`',
  },
  {
    id: 31,
    problem: "How to find Git commits that changed a specific file",
    solution:
      "Use `git log --follow filename` to see commit history for a file, including renames. With changes: `git log -p filename`",
  },
  {
    id: 32,
    problem: "How to find Git commits by author",
    solution:
      'Use `git log --author="name"` to filter commits by author. Partial matches work: `git log --author="john"`',
  },
  {
    id: 33,
    problem: "How to find Git commits between two dates",
    solution:
      'Use `git log --since="2023-01-01" --until="2023-12-31"` for date ranges. Relative dates work: `git log --since="2 weeks ago"`',
  },
  {
    id: 34,
    problem: "How to count Git commits in repository",
    solution:
      "Use `git rev-list --count HEAD` for total commits. For branch: `git rev-list --count branch_name`. By author: `git shortlog -s -n`",
  },
  {
    id: 35,
    problem: "How to change multiple Git commit messages in history",
    solution:
      "Use interactive rebase: `git rebase -i HEAD~n`\nMark commits with 'reword'\nSave and edit each message\nForce push if already pushed: `git push --force`",
  },
  {
    id: 36,
    problem: "How to split a Git commit into multiple commits",
    solution:
      "1. Start interactive rebase: `git rebase -i HEAD~n`\n2. Mark commit with 'edit'\n3. Reset: `git reset HEAD~`\n4. Stage files separately and commit\n5. Continue: `git rebase --continue`",
  },
  {
    id: 37,
    problem: "How to reorder Git commits in history",
    solution:
      "Use interactive rebase: `git rebase -i HEAD~n`\nThen reorder commit lines in editor\nSave and exit (may need to resolve conflicts)",
  },
  {
    id: 38,
    problem: "How to combine Git repositories preserving history",
    solution:
      "Use `git subtree`:\n1. Add remote: `git remote add proj-b ../project-b`\n2. Fetch: `git fetch proj-b`\n3. Merge: `git merge -s ours --no-commit proj-b/main`\n4. Read subtree: `git read-tree --prefix=dir-b/ -u proj-b/main`\n5. Commit",
  },
  {
    id: 39,
    problem: "How to move Git repository to new location preserving history",
    solution:
      "1. Clone bare repo: `git clone --bare old_repo_url`\n2. Mirror push: `cd old-repo.git && git push --mirror new_repo_url`\n3. Update local clones: `git remote set-url origin new_repo_url`",
  },
  {
    id: 40,
    problem: "How to remove large files from Git history",
    solution:
      "Use BFG Repo-Cleaner or `git filter-branch`:\n1. `git filter-branch --tree-filter 'rm -f big_file' HEAD`\n2. `git push origin --force --all`\n3. Prune reflogs: `git reflog expire --expire=now --all && git gc --prune=now --aggressive`",
  },
  {
    id: 41,
    problem: "How to configure Git to ignore file mode changes",
    solution:
      "Run `git config core.fileMode false` to ignore executable bit changes. For global setting: `git config --global core.fileMode false`",
  },
  {
    id: 42,
    problem: "How to set default Git branch name to main",
    solution:
      "1. Set default: `git config --global init.defaultBranch main`\n2. For existing repos: `git branch -m master main`\n3. Push: `git push -u origin main`\n4. Change default in GitHub/GitLab settings",
  },
  {
    id: 43,
    problem: "How to create Git aliases for common commands",
    solution:
      "Example aliases:\n`git config --global alias.co checkout`\n`git config --global alias.br branch`\n`git config --global alias.ci commit`\n`git config --global alias.st status`",
  },
  {
    id: 44,
    problem: "How to sign Git commits with GPG",
    solution:
      '1. Generate GPG key: `gpg --gen-key`\n2. Configure Git: `git config --global user.signingkey <key-id>`\n3. Sign commits: `git commit -S -m "message"`\n4. Verify: `git log --show-signature`',
  },
  {
    id: 45,
    problem: "How to change Git default text editor",
    solution:
      'Set editor:\nFor VS Code: `git config --global core.editor "code --wait"`\nFor Nano: `git config --global core.editor "nano"`\nFor Vim: `git config --global core.editor "vim"`',
  },
  {
    id: 46,
    problem: "How to configure Git credential storage",
    solution:
      "For HTTPS remotes:\n1. Cache credentials: `git config --global credential.helper cache` (default 15min)\n2. Store permanently: `git config --global credential.helper store` (not recommended)\n3. For macOS: `git config --global credential.helper osxkeychain`",
  },
  {
    id: 47,
    problem: "How to set Git diff tool and merge tool",
    solution:
      'Configure diff tool:\n`git config --global diff.tool vscode`\n`git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"`\n\nFor merge tool:\n`git config --global merge.tool vscode`\n`git config --global mergetool.vscode.cmd "code --wait $MERGED"`',
  },
  {
    id: 48,
    problem: "How to enable Git color output",
    solution:
      "Enable colors:\n`git config --global color.ui auto`\nFor specific commands:\n`git config --global color.branch auto`\n`git config --global color.diff auto`\n`git config --global color.status auto`",
  },
  {
    id: 49,
    problem: "How to set Git line ending configurations",
    solution:
      "For Windows:\n`git config --global core.autocrlf true`\nFor Linux/Mac:\n`git config --global core.autocrlf input`\nTo disable:\n`git config --global core.autocrlf false`",
  },
  {
    id: 50,
    problem: "How to increase Git buffer size for large repos",
    solution:
      "Set post buffer size:\n`git config --global http.postBuffer 524288000` (500MB)\nFor SSH:\nAdd `SendEnv LC_ALL` to ~/.ssh/config\nAnd `SetEnv LC_ALL=en_US.UTF-8` to /etc/ssh/sshd_config",
  },
  {
    id: 51,
    problem: "How to fix Git authentication failed errors",
    solution:
      "For HTTPS:\n1. Update credentials: `git config --global credential.helper cache`\n2. Re-enter password\nFor SSH:\n1. Ensure SSH key added to agent: `ssh-add ~/.ssh/id_rsa`\n2. Verify key added to GitHub/GitLab",
  },
  {
    id: 52,
    problem: "How to fix Git 'permission denied (publickey)' error",
    solution:
      '1. Generate SSH key: `ssh-keygen -t ed25519 -C "email"`\n2. Add to agent: `eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_ed25519`\n3. Add public key to GitHub/GitLab\n4. Test: `ssh -T git@github.com`',
  },
  {
    id: 53,
    problem: "How to fix Git 'unable to access' SSL certificate problem",
    solution:
      "Temporary fix:\n`git config --global http.sslVerify false`\nProper fix:\n1. Get correct certificate\n2. Configure Git: `git config --global http.sslCAInfo /path/to/cert.pem`",
  },
  {
    id: 54,
    problem: "How to fix Git 'detected dubious ownership' error",
    solution:
      'Add safe directory:\n`git config --global --add safe.directory /your/repo/path`\nOr for all repos:\n`git config --global safe.directory "*"`',
  },
  {
    id: 55,
    problem: "How to fix Git 'refusing to merge unrelated histories'",
    solution:
      "Allow unrelated histories:\n`git pull origin branch --allow-unrelated-histories`\nOr when merging:\n`git merge branch --allow-unrelated-histories`",
  },
  {
    id: 56,
    problem: "How to fix Git 'cannot lock ref' error",
    solution:
      "1. Delete problematic refs:\n`git gc --prune=now`\n2. Or manually delete from .git/refs/heads\n3. Fetch again: `git fetch --all`",
  },
  {
    id: 57,
    problem: "How to fix Git 'push rejected' non-fast-forward error",
    solution:
      "1. Pull changes first: `git pull origin branch`\n2. Resolve conflicts\n3. Push again\nOr force push (caution): `git push --force`",
  },
  {
    id: 58,
    problem: "How to fix Git 'bad object' errors",
    solution:
      "1. Check repo integrity: `git fsck`\n2. Reclone if needed\n3. For specific objects: `git rev-parse --verify object_hash`\n4. Try `git gc` to clean up",
  },
  {
    id: 59,
    problem: "How to fix Git 'cannot rebase: you have unstaged changes'",
    solution:
      "1. Stash changes: `git stash`\n2. Rebase: `git rebase branch`\n3. Apply stash: `git stash pop`\nOr commit changes first",
  },
  {
    id: 60,
    problem: "How to fix Git 'fatal: not a git repository'",
    solution:
      "1. Ensure you're in repo root\n2. Check .git directory exists\n3. If cloned recently, verify clone succeeded\n4. For submodules: `git submodule update --init`",
  },
  {
    id: 61,
    problem: "How to create GitHub repository from command line",
    solution:
      "Using GitHub CLI:\n1. Install: `brew install gh`\n2. Authenticate: `gh auth login`\n3. Create: `gh repo create repo-name --public --clone`",
  },
  {
    id: 62,
    problem: "How to fork a GitHub repository",
    solution:
      "1. Navigate to repo on GitHub\n2. Click 'Fork' button\n3. Select owner\n4. Clone your fork: `git clone https://github.com/yourname/repo.git`",
  },
  {
    id: 63,
    problem: "How to create GitHub pull request from command line",
    solution:
      'Using GitHub CLI:\n1. Push branch: `git push origin branch`\n2. Create PR: `gh pr create --title "PR title" --body "Description"`\n3. View: `gh pr view --web`',
  },
  {
    id: 64,
    problem: "How to rebase GitHub pull request",
    solution:
      "1. Fetch upstream: `git fetch upstream`\n2. Rebase: `git rebase upstream/main`\n3. Resolve conflicts\n4. Force push: `git push origin branch --force`",
  },
  {
    id: 65,
    problem: "How to squash commits in GitHub pull request",
    solution:
      "1. Interactive rebase: `git rebase -i HEAD~n`\n2. Mark commits with 'squash'\n3. Edit final message\n4. Force push: `git push --force`",
  },
  {
    id: 66,
    problem: "How to view GitHub pull request locally",
    solution:
      "Using GitHub CLI:\n`gh pr checkout pr-number`\nOr manually:\n1. Fetch: `git fetch origin pull/ID/head:pr-branch`\n2. Checkout: `git checkout pr-branch`",
  },
  {
    id: 67,
    problem: "How to resolve GitHub merge conflicts in web UI",
    solution:
      "1. Click 'Resolve conflicts' button\n2. Edit files in browser\n3. Mark as resolved\n4. Click 'Commit merge'",
  },
  {
    id: 68,
    problem: "How to enable GitHub Actions for repository",
    solution:
      '1. Add .github/workflows/main.yml\n2. Example content:\n```yaml\nname: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - run: echo "Hello World"\n```',
  },
  {
    id: 69,
    problem: "How to create GitHub Issues from command line",
    solution:
      'Using GitHub CLI:\n`gh issue create --title "Bug report" --body "Description"`\nList issues: `gh issue list`\nView: `gh issue view 1 --web`',
  },
  {
    id: 70,
    problem: "How to transfer GitHub repository to new owner",
    solution:
      "1. Go to repo Settings\n2. Scroll to 'Danger Zone'\n3. Click 'Transfer ownership'\n4. Enter new owner and repo name\n5. Confirm transfer",
  },
  {
    id: 71,
    problem: "How to create GitHub repository template",
    solution:
      "1. Go to repo Settings\n2. Check 'Template repository'\n3. Save\nNow others can 'Use this template' when creating new repos",
  },
  {
    id: 72,
    problem: "How to add collaborators to GitHub repository",
    solution:
      "1. Go to repo Settings > Collaborators\n2. Add GitHub username\n3. Set permission level (Read, Write, Admin)\n4. User accepts email invitation",
  },
  {
    id: 73,
    problem: "How to protect GitHub branches",
    solution:
      "1. Go to repo Settings > Branches\n2. Add branch protection rule\n3. Enable options:\n- Require pull requests\n- Require approvals\n- Require status checks\n- Include administrators",
  },
  {
    id: 74,
    problem: "How to enable GitHub Wiki for repository",
    solution:
      "1. Go to repo Settings > Features\n2. Check 'Wiki'\n3. Save\n4. Access at github.com/user/repo/wiki\n5. Clone locally: `git clone https://github.com/user/repo.wiki.git`",
  },
  {
    id: 75,
    problem: "How to create GitHub Pages site",
    solution:
      "1. Create gh-pages branch or use docs/ folder\n2. For project site: push to gh-pages branch\n3. For user/organization site: push to main branch\n4. Enable in Settings > Pages\n5. Configure custom domain if needed",
  },
  {
    id: 76,
    problem: "How to use GitHub Codespaces with repository",
    solution:
      "1. Click 'Code' > 'Open with Codespaces'\n2. Create new codespace\n3. Configure devcontainer.json if needed\n4. Customize in Settings > Codespaces",
  },
  {
    id: 77,
    problem: "How to archive GitHub repository",
    solution:
      "1. Go to repo Settings\n2. Scroll to 'Danger Zone'\n3. Click 'Archive this repository'\n4. Confirm\nArchived repos are read-only",
  },
  {
    id: 78,
    problem: "How to enable GitHub Discussions for repository",
    solution:
      "1. Go to repo Settings > Features\n2. Check 'Discussions'\n3. Save\n4. Access via 'Discussions' tab\n5. Configure categories and permissions",
  },
  {
    id: 79,
    problem: "How to create GitHub Releases",
    solution:
      "1. Go to repo 'Releases'\n2. Click 'Draft new release'\n3. Tag version (v1.0.0)\n4. Set title and description\n5. Attach binaries\n6. Publish release\nVia CLI: `gh release create v1.0.0 --notes \"Release notes\"`",
  },
  {
    id: 80,
    problem: "How to download GitHub Release assets",
    solution:
      'Using GitHub CLI:\n`gh release download v1.0.0 -p "*.zip"`\nOr via API:\n`curl -L https://github.com/user/repo/releases/download/v1.0.0/asset.zip -o asset.zip`',
  },
  {
    id: 81,
    problem: "How to rebase Git branch interactively",
    solution:
      "1. Start rebase: `git rebase -i HEAD~n`\n2. Edit file to reorder/squash/fixup commits\n3. Save and close\n4. Resolve conflicts if any\n5. Continue: `git rebase --continue`\n6. Force push if needed: `git push --force`",
  },
  {
    id: 82,
    problem: "How to cherry-pick Git commits between branches",
    solution:
      "1. Find commit hash: `git log branch`\n2. Checkout target branch: `git checkout main`\n3. Cherry-pick: `git cherry-pick commit_hash`\nFor range: `git cherry-pick start_hash^..end_hash`",
  },
  {
    id: 83,
    problem: "How to apply Git patch file",
    solution:
      "1. Create patch: `git diff > changes.patch`\n2. Apply patch: `git apply changes.patch`\n3. For commits: `git format-patch -1 commit_hash`\n4. Apply commit: `git am < patch_file`",
  },
  {
    id: 84,
    problem: "How to bisect Git repository to find bug",
    solution:
      "1. Start: `git bisect start`\n2. Mark bad: `git bisect bad`\n3. Mark good: `git bisect good v1.0`\n4. Test current commit\n5. Mark good/bad: `git bisect good` or `bad`\n6. Reset when done: `git bisect reset`",
  },
  {
    id: 85,
    problem: "How to rewrite Git history with filter-branch",
    solution:
      'Example - change email:\n`git filter-branch --commit-filter \'\n  if [ "$GIT_AUTHOR_EMAIL" = "old@email.com" ];\n  then\n    GIT_AUTHOR_EMAIL="new@email.com";\n    git commit-tree "$@";\n  else\n    git commit-tree "$@";\n  fi\' HEAD`',
  },
  {
    id: 86,
    problem: "How to manage Git submodules",
    solution:
      "1. Add: `git submodule add repo_url path`\n2. Clone with submodules: `git clone --recurse-submodules repo`\n3. Update: `git submodule update --init --recursive`\n4. Pull updates: `git submodule update --remote`",
  },
  {
    id: 87,
    problem: "How to split Git repository into subdirectories",
    solution:
      "Use `git filter-branch`:\n`git filter-branch --prune-empty --subdirectory-filter folder branch`\nThen create new repo with this history",
  },
  {
    id: 88,
    problem: "How to track empty directories in Git",
    solution:
      "1. Create .gitignore file in directory\n2. Add:\n`# Ignore all files\n*\n# Except .gitignore\n!.gitignore`\n3. Commit .gitignore file",
  },
  {
    id: 89,
    problem: "How to optimize Git repository size",
    solution:
      "1. Cleanup: `git gc --aggressive`\n2. Prune: `git prune`\n3. Repack: `git repack -a -d --depth=250 --window=250`\n4. For large files: use BFG or git-lfs",
  },
  {
    id: 90,
    problem: "How to use Git worktrees",
    solution:
      "1. Add worktree: `git worktree add ../new-feature feature-branch`\n2. List: `git worktree list`\n3. Remove: `git worktree remove ../new-feature`\n4. Prune: `git worktree prune`",
  },
  {
    id: 91,
    problem: "How to setup Git hooks",
    solution:
      '1. Navigate to .git/hooks\n2. Create hook file (pre-commit, post-merge etc.)\n3. Make executable: `chmod +x pre-commit`\n4. Example pre-commit:\n```bash\n#!/bin/sh\necho "Running tests..."\nnpm test\n```',
  },
  {
    id: 92,
    problem: "How to use Git with large files (LFS)",
    solution:
      '1. Install git-lfs\n2. Track patterns: `git lfs track "*.psd"`\n3. Commit .gitattributes\n4. Use normally - large files stored on LFS server\n5. Clone with: `git lfs clone repo_url`',
  },
  {
    id: 93,
    problem: "How to create Git bundle for offline transfer",
    solution:
      "1. Create bundle: `git bundle create repo.bundle --all`\n2. Transfer file\n3. Clone from bundle: `git clone repo.bundle repo`\n4. Update: `git fetch repo.bundle`",
  },
  {
    id: 94,
    problem: "How to mirror Git repository to another remote",
    solution:
      "1. Add mirror remote: `git remote add mirror url`\n2. Push all refs: `git push --mirror mirror`\n3. For ongoing sync: `git remote update && git push --mirror mirror`",
  },
  {
    id: 95,
    problem: "How to manage multiple Git identities",
    solution:
      '1. Per-repo config: `git config user.email "work@email.com"`\n2. Conditional includes in ~/.gitconfig:\n```\n[includeIf "gitdir:~/work/"]\n  path = .gitconfig-work\n```\n3. Store work identity in ~/.gitconfig-work',
  },
  {
    id: 96,
    problem: "How to search Git history for deleted code",
    solution:
      'Use `git log -p -S"deleted text"` to find commits that added/removed text\nFor regex: `git log -p -G"regex"`\nShow changes: `git show commit_hash`',
  },
  {
    id: 97,
    problem: "How to visualize Git branch structure",
    solution:
      "Use `git log --graph --oneline --decorate --all`\nFor GUI:\n- `gitk --all`\n- `git gui`\nThird-party tools:\n- Sourcetree\n- GitKraken\n- VS Code Git extensions",
  },
  {
    id: 98,
    problem: "How to export Git repository as zip file",
    solution:
      "1. Archive: `git archive --format zip --output repo.zip main`\n2. For specific folder: `git archive --format zip --prefix=folder/ --output folder.zip main folder`\n3. GitHub: Add /archive/main.zip to repo URL",
  },
  {
    id: 99,
    problem: "How to find Git commit that introduced a bug",
    solution:
      "1. Use `git bisect` (see problem 84)\n2. Or binary search manually:\n- Checkout midpoint: `git checkout HEAD~50`\n- Test\n- If bug exists: `git checkout HEAD~25`\n- Else: `git checkout HEAD~75`\nRepeat until found",
  },
  {
    id: 100,
    problem: "How to contribute to open source Git projects",
    solution:
      "1. Fork project\n2. Clone your fork\n3. Create feature branch\n4. Make changes\n5. Commit with clear messages\n6. Push to your fork\n7. Create pull request\n8. Address review comments\n9. Maintainers merge\n10. Sync your fork",
  },
  {
    id: 101,
    problem: "How to undo a Git merge that hasn't been pushed",
    solution:
      "Use `git reset --hard HEAD~1` to reset to pre-merge state. For merge conflicts, use `git merge --abort` during conflict resolution.",
  },
  {
    id: 102,
    problem: "How to list all files changed in a Git commit",
    solution:
      "Use `git show --name-only commit_hash` to view changed files. For summary: `git diff-tree --no-commit-id --name-only -r commit_hash`",
  },
  {
    id: 103,
    problem: "How to change the author of last Git commit",
    solution:
      '1. `git commit --amend --author="New Author <email@example.com>"`\n2. Force push if needed: `git push --force` (caution with shared repos)',
  },
  {
    id: 104,
    problem: "How to create a Git tag for an older commit",
    solution:
      '1. Find commit hash: `git log --oneline`\n2. Create tag: `git tag -a v1.2 commit_hash -m "Tag message"`\n3. Push tag: `git push origin v1.2`',
  },
  {
    id: 105,
    problem: "How to find which Git branch contains a specific commit",
    solution:
      "Use `git branch --contains commit_hash` for local branches or `git branch -r --contains commit_hash` for remote branches.",
  },
  {
    id: 106,
    problem: "How to sync a Git fork with upstream repository",
    solution:
      "1. `git fetch upstream`\n2. `git checkout main`\n3. `git merge upstream/main`\n4. `git push origin main`",
  },
  {
    id: 107,
    problem: "How to delete all local Git branches except main",
    solution:
      'Run: `git branch | grep -v "main" | xargs git branch -D` (Note: -D force deletes unmerged branches)',
  },
  {
    id: 108,
    problem: "How to view Git changes before committing",
    solution:
      "Use `git diff` for unstaged changes or `git diff --cached` for staged changes. For all changes: `git diff HEAD`",
  },
  {
    id: 109,
    problem: "How to rename a Git tag",
    solution:
      "1. `git tag new_tag old_tag`\n2. `git tag -d old_tag`\n3. `git push origin :refs/tags/old_tag`\n4. `git push --tags`",
  },
  {
    id: 110,
    problem: "How to find the Git commit that deleted a file",
    solution:
      "Use `git log --diff-filter=D -- path/to/file` to find the deletion commit. To restore: `git checkout commit_hash^ -- path/to/file`",
  },
  {
  "id": 111,
  "problem": "How to resolve Git 'HEAD detached at' state",
  "solution": "1. Save changes: `git stash`\n2. Return to branch: `git checkout main`\n3. Create new branch (optional): `git checkout -b new_branch`"
},
{
  "id": 112,
  "problem": "How to find large files in Git history",
  "solution": "Use `git rev-list --objects --all | git cat-file --batch-check='%(objectsize) %(rest)' | sort -n | tail -n 50` to list largest objects."
},
{
  "id": 113,
  "problem": "How to amend a Git commit without changing the message",
  "solution": "Stage changes and run: `git commit --amend --no-edit` (preserves original message). Force push if pushed: `git push --force`."
},
{
  "id": 114,
  "problem": "How to list all Git remotes and their URLs",
  "solution": "Use `git remote -v` for verbose output or `git remote show origin` for detailed remote branch tracking."
},
{
  "id": 115,
  "problem": "How to revert multiple Git commits without losing changes",
  "solution": "1. `git revert --no-commit oldest_hash..newest_hash`\n2. Resolve conflicts if any\n3. `git commit -m \"Reverted commits X to Y\"`"
},
{
  "id": 116,
  "problem": "How to set default Git push behavior",
  "solution": "Configure: `git config --global push.default current` (pushes current branch only) or `simple` (safe default)."
},
{
  "id": 117,
  "problem": "How to find Git commits touching specific code",
  "solution": "Use `git log -S\"function_name\"` (content search) or `git log -L start,end:file` (line range history)."
},
{
  "id": 118,
  "problem": "How to create a Git patch from uncommitted changes",
  "solution": "1. `git diff > changes.patch` (unstaged)\n2. For staged: `git diff --cached > changes.patch`\n3. Apply later: `git apply changes.patch`"
},
{
  "id": 119,
  "problem": "How to ignore whitespace changes in Git diff",
  "solution": "Use `git diff -w` or `git diff --ignore-all-space`. For merges: `git merge -Xignore-all-space`."
},
{
  "id": 120,
  "problem": "How to list all Git config settings",
  "solution": "Run `git config --list --show-origin` (with source locations) or `git config -l` for simplified output."
},
{
  "id": 121,
  "problem": "How to resolve Git 'unable to prune' remote branches",
  "solution": "1. Update remote refs: `git remote prune origin`\n2. Force sync: `git fetch -p`\n3. Delete local branches tracking deleted remotes: `git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D`"
},
{
  "id": 122,
  "problem": "How to split a Git repository into subtrees",
  "solution": "1. Add remote: `git remote add project-b git@url`\n2. Merge: `git merge -s ours --no-commit project-b/main`\n3. Read subtree: `git read-tree --prefix=dir-b/ -u project-b/main`\n4. Commit: `git commit -m \"Merge project-b as subtree\"`"
},
{
  "id": 123,
  "problem": "How to handle Git line endings consistently across OS",
  "solution": "1. Global config: `git config --global core.autocrlf true` (Windows)\n2. For Unix/Mac: `git config --global core.autocrlf input`\n3. Enforce via `.gitattributes`: `* text=auto`"
},
{
  "id": 124,
  "problem": "How to find and purge sensitive data from Git history",
  "solution": "1. Use BFG: `bfg --replace-text passwords.txt repo.git`\n2. Or filter-branch: `git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch secretfile' --prune-empty --tag-name-filter cat -- --all`\n3. Force push: `git push --force --all`"
},
{
  "id": 125,
  "problem": "How to migrate Git repo with LFS to new server",
  "solution": "1. Clone with LFS: `git lfs clone --mirror old-repo`\n2. Change remote: `git remote set-url origin new-repo-url`\n3. Push everything: `git push --mirror && git lfs push --all origin`"
},
{
  "id": 126,
  "problem": "How to debug Git SSL certificate problems",
  "solution": "1. Temporarily disable: `git config --global http.sslVerify false`\n2. Inspect cert: `openssl s_client -connect host:443 -showcerts`\n3. Permanently fix: `git config --global http.sslCAInfo /path/to/cert.pem`"
},
{
  "id": 127,
  "problem": "How to optimize Git performance for large repos",
  "solution": "1. Enable fsmonitor: `git config --global core.fsmonitor true`\n2. Use sparse-checkout: `git sparse-checkout init --cone`\n3. Set compression: `git config --global core.compression 9`\n4. Increase buffer: `git config --global http.postBuffer 524288000`"
},
{
  "id": 128,
  "problem": "How to handle Git submodule conflicts",
  "solution": "1. Update submodules: `git submodule update --init --recursive`\n2. Resolve conflicts in submodule directory\n3. Commit submodule pointer: `git add submodule_path`\n4. Continue: `git rebase --continue` or `git merge --continue`"
},
{
  "id": 129,
  "problem": "How to create a Git archive with submodules",
  "solution": "1. Clone with submodules: `git clone --recurse-submodules repo`\n2. Archive: `git archive --format tar --output full.tar HEAD`\n3. Add submodules: `git submodule foreach --recursive 'git archive --prefix=$displaypath/ --format tar HEAD --output sub.tar && tar --concatenate --file=../full.tar sub.tar && rm sub.tar'`"
},
{
  "id": 130,
  "problem": "How to implement Git commit signing with SSH keys",
  "solution": "1. Configure: `git config --global gpg.format ssh`\n2. Set signing key: `git config --global user.signingkey \"$(ssh-add -L | head -n1)\"`\n3. Sign commits: `git commit -S -m \"message\"`\n4. Verify: `git log --show-signature`"
},
{
  "id": 131,
  "problem": "How to handle Git merge conflicts in binary files",
  "solution": "1. Configure diff tool: `git config merge.conflictStyle diff3`\n2. Use custom merge driver (in .gitattributes): `*.psd merge=keepTheir`\n3. Define driver: `git config merge.keepTheir.name \"Keep their binary\"`\n4. Manual resolution: Checkout --ours/--theirs versions"
},
{
  "id": 132,
  "problem": "How to automate Git hooks with Husky",
  "solution": "1. Install: `npm install husky --save-dev`\n2. Configure in package.json:\n```json\n\"husky\": {\n  \"hooks\": {\n    \"pre-commit\": \"lint-staged\",\n    \"commit-msg\": \"commitlint -E HUSKY_GIT_PARAMS\"\n  }\n}```"
},
{
  "id": 133,
  "problem": "How to implement Git commit message templates",
  "solution": "1. Create template file:\n```\n# [Type]: Subject\n# [JIRA-1234]\n# Commit message body\n```\n2. Configure: `git config --global commit.template ~/.gitmessage.txt`"
},
{
  "id": 134,
  "problem": "How to debug Git performance issues",
  "solution": "1. Trace execution: `GIT_TRACE=1 git status`\n2. Performance stats: `GIT_TRACE_PERFORMANCE=1 git status`\n3. Memory stats: `GIT_TRACE_PACKET=1 git status`\n4. Disable extensions: `git -c core.preloadindex=false status`"
},
{
  "id": 135,
  "problem": "How to handle Git with Unicode filenames",
  "solution": "1. Set encoding: `git config --global core.quotepath false`\n2. Normalize filenames: `git config --global core.precomposeunicode true` (Mac)\n3. For Windows: `git config --global core.protectNTFS false`"
},
{
  "id": 136,
  "problem": "How to implement Git secret scanning",
  "solution": "1. Use pre-commit hook with gitleaks:\n```yaml\nrepos:\n- repo: https://github.com/zricethezav/gitleaks\n  rev: v8.0.0\n  hooks:\n    - id: gitleaks\n      args: [\"--verbose\"]```\n2. Or GitHub Actions: `uses: gitleaks/gitleaks-action@v2`"
},
{
  "id": 137,
  "problem": "How to manage Git worktrees for multiple branches",
  "solution": "1. Create: `git worktree add ../feature-123 feature/123`\n2. List: `git worktree list`\n3. Remove: `git worktree remove ../feature-123`\n4. Prune: `git worktree prune`"
},
{
  "id": 138,
  "problem": "How to handle Git with symlinks",
  "solution": "1. Enable symlinks: `git config --global core.symlinks true`\n2. For Windows: `git clone -c core.symlinks=true repo_url`\n3. Convert to regular files: `git config --global core.symlinks false`"
},
{
  "id": 139,
  "problem": "How to implement Git blame ignore revisions",
  "solution": "1. Create `.git-blame-ignore-revs` file with commit hashes\n2. Configure: `git config blame.ignoreRevsFile .git-blame-ignore-revs`\n3. Use: `git blame --ignore-revs-file .git-blame-ignore-revs file`"
},
{
  "id": 140,
  "problem": "How to optimize Git for monorepos",
  "solution": "1. Use sparse-checkout: `git sparse-checkout init --cone`\n2. Partial clone: `git clone --filter=blob:none repo_url`\n3. Shallow clone: `git clone --depth=1 repo_url`\n4. Configure FSMonitor: `git config core.fsmonitor true`"
},
{
  "id": 141,
  "problem": "How to handle Git with case-sensitive filenames",
  "solution": "1. Detect case conflicts: `git config --global core.ignoreCase false`\n2. Fix conflicts: `git mv --force OldFile.txt newfile.txt`\n3. For Windows: `git config --global core.ignoreCase true`"
},
{
  "id": 142,
  "problem": "How to implement Git commit signing in CI pipelines",
  "solution": "1. Store GPG key in CI secrets\n2. Configure Git:\n```bash\ngit config --global user.signingkey $GPG_KEY_ID\ngit config --global gpg.program \"gpg\"\ngit commit -S -m \"CI signed commit\"\n```\n3. For SSH signing: Load SSH agent in CI"
},
{
  "id": 143,
  "problem": "How to handle Git with very large files (without LFS)",
  "solution": "1. Use `git annex` for large file management\n2. Or `git-remote-gcrypt` for encrypted repos\n3. Alternative: `git bundle` for offline transfers\n4. Configure: `git config --global uploadpack.allowfilter true`"
},
{
  "id": 144,
  "problem": "How to implement Git-based versioning for releases",
  "solution": "1. Use `git describe --tags --always` for version strings\n2. Auto-version with tags:\n```bash\ngit tag -a v$(date +%Y.%m.%d) -m \"Release $(date +%Y-%m-%d)\"\ngit push --tags\n```\n3. For semantic versioning: Use `standard-version` npm package"
},
{
  "id": 145,
  "problem": "How to debug Git hook failures",
  "solution": "1. Run manually: `.git/hooks/pre-commit`\n2. Enable tracing: `set -x` in hook script\n3. Capture output: `git commit 2> hook-debug.log`\n4. Check exit codes: `echo $?` after hook execution"
},
{
  "id": 146,
  "problem": "How to implement Git-based configuration management",
  "solution": "1. Use `etckeeper` for /etc management\n2. For dotfiles: `git clone --bare repo_url $HOME/.cfg`\n3. Alias: `config='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'`\n4. Checkout: `config checkout -f`"
},
{
  "id": 147,
  "problem": "How to handle Git with multiple cryptographic backends",
  "solution": "1. For OpenSSL: `git config --global http.sslBackend openssl`\n2. For SecureChannel: `git config --global http.sslBackend schannel` (Windows)\n3. For GnuTLS: `git config --global http.sslBackend gnutls`"
},
{
  "id": 148,
  "problem": "How to implement Git-based database versioning",
  "solution": "1. Use Flyway/Liquibase for schema\n2. Store migrations in Git\n3. For data: `git-rdbms` bridge\n4. Alternative: `git-annex` for binary snapshots"
},
{
  "id": 149,
  "problem": "How to handle Git with filesystem watchers",
  "solution": "1. Enable FSMonitor: `git config --global core.fsmonitor true`\n2. For Watchman: `git config --global core.fsmonitor .git/hooks/fsmonitor-watchman`\n3. Custom hook: `#!/bin/sh\nwatchman watch-project \"$1\"`"
},
{
  "id": 150,
  "problem": "How to implement Git-based documentation workflows",
  "solution": "1. Use Markdown files in repo\n2. Version with tags: `git tag -a docs-v1.0 -m \"Documentation release\"`\n3. Auto-deploy with hooks:\n```bash\ngit archive --format=zip HEAD:docs/ > site.zip\nrsync -avz docs/ user@host:/path\n```"
}
];

export default gitProblems;
