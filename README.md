# An Oxford Nanopore Frontend Technical Test

As part of our application process, we'd like you to demonstrate your talents with a small assignment. 
The task is useful for us to get an idea of your problem solving, organisation, eye-for-detail and overall thought processes. 

## Getting Started

### Prerequisites

Before you can run this project, you need to have the following installed:

- Node.js
- pnpm (suggested)

### Installation

To install this project, follow these steps:

1. Clone the repository
2. Navigate to the project directory
3. Run `pnpm install` or `yarn install` to install the required dependencies

### Running the App

To run this app, follow these steps:

1. Navigate to the project directory
2. Run `pnpm run dev` or `yarn dev` to start the development server
3. Open your web browser and go to `http://localhost:3000` to view the app

## Deployment

This app can be deployed using CICD pipeline, by following these steps:

1. Create a new branch for your changes, based on the develop branch: git checkout -b feature/my-feature develop
2. Make your changes and commit them: git add . followed by git commit -m "My commit message"
3. Push your branch to the remote repository: git push origin feature/my-feature
4. Create a pull request (PR) to merge your changes into the develop branch.
5. Wait for the CI/CD pipeline to run and for any necessary approvals.
6. Once your PR is approved and merged into the develop branch, it will trigger a new build and deployment to the staging environment. Test your changes on the staging environment.
7. Once you are satisfied with your changes on the staging environment, create a new PR to merge your changes into the production branch.
8. Wait for the necessary approvals and once your PR is approved and merged into the production branch, it will trigger a new build and deployment to the production environment.

## Branching Strategy

This project uses the Gitflow branching strategy, with the following branches:

- **main:** This branch contains the stable and production-ready code.
- **develop:** This branch contains the latest development code.
- **feature/[feature-name]:** This branch is used to develop new features for the app. When the feature is complete, it is merged back into the develop branch.
- **hotfix/[hotfix-name]:** This branch is used to fix bugs and issues in the app. When the hotfix is complete, it is merged back into both the main and develop branches.

## Built With

- TypeScript
- Next.js
- React
- Styled-components
- Storybook
- Jest
- React Testing Library
- Eslint
- Prettier
- Husky
- Plop

## Commands
- dev: runs your application on localhost:3000
- build: creates the production build version
- export: after build, create file to static version
- deploy: create and export the production and static version
- start: starts a simple server with the build production code
- storybook: runs storybook on localhost:6006
- build-storybook: create the build version of storybook
- next:lint: runs the linter in all components and pages from NextJS
- lint: runs the linter in all components and pages
- test: runs jest to test all components and pages
- test:watch: runs jest in watch mode
- generate: create a component using a template

## License

MIT License