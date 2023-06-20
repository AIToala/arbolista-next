# Arbolista
Project created using NextJS, Prisma, MySQL, NextAuth & TailwindCSS
> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress.
> If you have any suggestions, feel free to file an issue.
## Folder Structure
Following NextJS documentation, we are using the app folder structure to categorize our project with a Feature Approach.
The folders are structured in this way:
- The global folders: components, hooks, libs, and utils.
- The feature folders: /pages/auth, api, actions.
- The pages that are saved on (pages) folder: /home, /acerca, /especies, /viveros and /galeria.

## Note on Performance
> **Warning**
> This app may feel slow in development mode. Currently finding solutions for that aspect. 
> If you have any suggestions, feel free to do so.

## Running project locally
Clone the repo and navigate to the root folder.
1. Open a terminal and execute
```sh
npm i
```
2. Feel free to use the `.env` given or update your variables.
3. Now, start the development server
```
npm run dev
```
## Running test cases locally
Open a terminal and execute:
    npm run test-cases
> **Warning**
> Javascript mocha tests run on chrome, make sure you have installed chrome browser.