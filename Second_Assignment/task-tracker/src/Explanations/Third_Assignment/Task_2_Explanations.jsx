/*

Creating a project with npm init -y
Running npm init -y quickly generates a default package.json configuration file without interactive prompts.

Dependencies versus development dependencies
Standard dependencies are required for production app execution, whereas devDependencies are strictly for development and testing tools.

package.json, package-lock.json, and node_modules
The package.json file defines project metadata and dependency ranges, package-lock.json locks down exact dependency trees, 
and node_modules stores the actual downloaded library source code.

npm install versus npm ci
Using npm install dynamically resolves packages and updates the lock file, while npm ci performs a clean,
exact install from the lock file for CI/CD environments.

Creating and running npm scripts
Custom npm scripts let you automate terminal workflows like launching your application.

Ignoring node_modules in Git
The node_modules folder must be ignored in Git because it is too large and easily reproducible via installation.

*/
