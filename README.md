# Note app

This is a basic app for notes management. Using this app u can view, add, remove and edit your notes.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `api`: a [Nest.js](https://nestjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## Swagger

There is a Swagger documentation for the API module where you can find all the requests you can send to the API service.

To access Swagger, just run the local server with:

```
pnpm dev
```

And then just go to

[Localhost Swagger](http://localhost:3001/api)


## Tests

The API has unit tests and e2e tests. To run them, use the following commands:

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Architecture and choices throughout the project

In my Nest.js project, I seamlessly implemented the basic configuration and CRUD generator provided in the official documentation. Leveraging a combination of Server-Side Rendering (SSR) and Client-Side Rendering (CSR), I ensured optimal performance for the web application. The UI was crafted using the delightful shadnc/ui library along with the flexibility of Tailwind CSS, resulting in a highly customizable and visually appealing user interface.

To maintain a consistent and organized codebase, I adhered to the naming conventions outlined in the Next.js documentation. Additionally, I adopted the suggested component architecture from Shadcn's documentation, enhancing the project's maintainability and scalability.

Throughout the development process, the synergy between Nest.js, shadnc/ui, and Tailwind CSS proved to be a winning combination, eliminating potential roadblocks and contributing to the project's simplicity. This strategic alignment facilitated a smooth and efficient workflow, allowing for a seamless integration of backend and frontend components.