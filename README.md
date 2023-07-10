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

Clone the repo and navigate to the root folder. Keep in mind that we are using Railway MySQL database with a Free Plan, in the case of errors use a local database to run it locally.

1. Open a terminal and execute

```sh
npm i
```

2. Feel free to use the `.env` given or update your variables. If you use another .env, do the following commands:

   1. Change inside the .env file, the DATABASE_URL constant by typing your preferred MySQL database. Follow this syntax provided by the Prisma ORM:

   > mysql://USER:PASSWORD@HOST:PORT/DATABASE

   2. Run the following command to push the changes to the new Database and to populate the database.

   ```sh
   npx prisma db push && npx prisma db seed
   ```

3. Now, start the development server and access localhost:3000 in your browser.

```
npm run dev
```
