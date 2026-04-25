# Git & GitHub - Full Orientation Guide

**What You Will Learn:**
- Why Git and GitHub exist (the pendrive problem)
- How Git internally works and the role of the .git folder
- All essential commands + complete professional workflow

**Required Reading (Read these blogs first):**

1. [Why Version Control Exists: The Pendrive Problem](https://blog.abdulrdeveloper.me/why-version-control-exists-the-pendrive-problem-git-and-github)  
   (Concept and history of Git & GitHub)

2. [Inside Git: How the .git Folder Actually Works](https://blog.abdulrdeveloper.me/inside-git-how-it-works-and-the-role-of-the-git-folder-git-and-github)  
   (Deep dive – what happens inside the .git folder)

3. [Git for Beginners: Basics and Essential Commands](https://blog.abdulrdeveloper.me/git-for-beginners-basics-and-essential-commands-git-and-github)  
   (Full commands + A-Z beginner guide)

Git sheet by Hitesh Sir https://git-scm.com/cheat-sheet
Learn Git https://docs.chaicode.com/youtube/chai-aur-git/welcome/

**Now Use This Cheat Sheet**

**Professional Collaboration Flow**  
(Use this best-practice flowchart for team workflows)

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