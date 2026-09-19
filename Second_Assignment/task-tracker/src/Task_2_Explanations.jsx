/*
Git explanations

git status: Shows the state of your working directory and staging area (which files are modified, staged, or untracked).

git add: Adds changes from your working directory to the staging area so they are ready to be committed.

git commit: Saves your staged changes permanently to the local Git repository history with an attached commit message.

git push: Uploads your local commits to a remote repository (like GitHub).

--------------------------------

Why node_modules should not be committed
It contains thousands of files and packages which are massive in size and can easily be regenerated using npm install from your package.json.

--------------------------------

Why package-lock.json should be committed
It locks down the exact dependency versions installed in your project,
ensuring everyone working on the project gets identical package versions.

--------------------------------

Angular-style commit messages (type: description)
A structured convention for writing commit messages that makes project history easy to read and parse automatically.

Common types
feat: A new feature.

fix: A bug fix.

docs: Documentation only changes.

style: Changes that do not affect the meaning of the code (formatting, missing semicolons, etc.).

refactor: Code changes that neither fix a bug nor add a feature.

chores: Changes to the build process or auxiliary tools.

--------------------------------

Difference between Prettier and ESLint
Prettier is strictly a code formatter (handles code style like spacing, quotes, and line breaks).
ESLint is a linter that analyzes code to find syntax bugs, code quality problems, and logic errors.

*/