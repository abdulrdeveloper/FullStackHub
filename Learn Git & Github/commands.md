# Git & GitHub - All Commands Cheat Sheet

---

## Basic Commands

| Command                          | Usage                                      |
|----------------------------------|--------------------------------------------|
| `git init`                       | Create local repository                    |
| `git add <file>`                 | Add specific file to staging               |
| `git add .`                      | Add all files to staging                   |
| `git commit -m "message"`        | Save changes with message                  |
| `git commit -am "message"`       | Add modified files + commit                |
| `git status`                     | Check working directory status             |
| `git log`                        | Show full commit history                   |
| `git log --oneline`              | Show short commit history                  |
| `git diff`                       | Show changes in working directory          |
| `git diff <old> <new>`           | Show changes between two commits           |

---

## Undo & Reset Commands

| Command                              | Usage                                      |
|--------------------------------------|--------------------------------------------|
| `git revert <commit-hash>`           | Safely undo commit (creates new commit)    |
| `git reset --hard <commit-hash>`     | Discard changes (dangerous, avoid in teams)|

---

## Git Internals Verification

| Command                              | Usage                                      |
|--------------------------------------|--------------------------------------------|
| `ls -a`                              | List all files (including .git)            |
| `git branch`                         | List all branches                          |
| `cat .git/HEAD`                      | Show current branch pointer                |
| `cat .git/refs/heads/main`           | Show latest commit hash                    |
| `ls .git/objects/`                   | List objects folder                        |
| `git cat-file -p <commit-hash>`      | Show complete commit details               |

---

## Remote & GitHub Commands

| Command                               | Usage                                      |
|---------------------------------------|--------------------------------------------|
| `git remote -v`                       | List remotes                               |
| `git remote add origin <url>`         | Add remote repository                      |
| `git remote set-url origin <url>`     | Update remote URL                          |
| `git clone <url>`                     | Clone repository                           |
| `git push -u origin <branch>`         | Push to remote with upstream               |
| `git pull origin <branch>`            | Pull from remote                           |

---

## Branching Commands

| Command                                      | Usage                                      |
|----------------------------------------------|--------------------------------------------|
| `git branch <branch-name>`                   | Create branch (no switch)                  |
| `git checkout -b <branch-name>`              | Create + switch to branch                  |
| `git checkout <branch-name>`                 | Switch to branch                           |
| `git branch -d <branch-name>`                | Delete branch                              |
| `git merge <branch>`                         | Merge branch into current                  |
| `git merge --squash <branch>`                | Squash merge (best practice)               |

---

## Rebase Command

| Command              | Usage                                      |
|----------------------|--------------------------------------------|
| `git rebase <branch>`| Replay current branch on top of target    |

---

## Professional Collaboration Flow

```mermaid
flowchart TD
    Start[Start New Feature] --> Create[Create Branch]
    Create --> Switch[git checkout -b feature/login]
    Switch --> Develop[Develop Feature]
    Develop --> Add[git add .]
    Develop --> Commit[git commit -m "message"]
    Add --> Commit
    Commit --> Push[Push Branch]
    Push --> Remote[git push -u origin feature/login]
    Remote --> PR[Open Pull Request]
    PR --> Review[Wait for Review & Merge]
    Review --> Update[Update Local Main]
    Update --> Checkout[git checkout main]
    Checkout --> Pull[git pull origin main]
    Pull --> Merge[Merge or Squash]
    Merge --> SquashMerge[git merge --squash feature/login]
    SquashMerge --> FinalCommit[git commit -m "Merge squash feature"]
    FinalCommit --> Done[Done]