
# React server side rendering proof of concept

## Boilerplate

*Note: we are using Nodejs 16.10 and corepack*
```bash
# TS hapi runtime env
corepack yarn init -y
corepack yarn add -D typescript nodemon npm-run-all
corepack yarn add -D @types/hapi__hapi @types/node
npx tsc --init
corepack yarn add @hapi/hapi
# Jest test env
corepack yarn add -D jest ts-jest
corepack yarn add -D @types/jest
npx ts-jest config:init
# webpack
corepack yarn add -D webpack webpack-cli ts-loader webpack-node-externals
# ReactJS
corepack yarn add react react-dom
corepack yarn add -D @types/react @types/react-dom
corepack yarn add -D clean-webpack-plugin webpack-manifest-plugin
# template engine
corepack yarn add ejs @hapi/vision @hapi/inert
corepack yarn add -D copy-webpack-plugin @types/ejs @types/hapi__vision @types/hapi__inert

```

## Run the server

```bash
corepack yarn dev
```

## Build with webpack

```bash
corepack yarn build:server
corepack yarn build:client
```

## Run the tests

```bash
corepack yarn test
# or
corepack yarn tdd
```

## Reference docs

- [Hapi with typescript](https://www.solarwinter.net/using-typescript-with-hapi/)
- [NodeJS + React SSR](https://nils-mehlhorn.de/posts/typescript-nodejs-react-ssr)
- [Corepack: manager of package managers](https://dev.to/cloudx/corepack-the-node-js-manager-of-package-managers-44dd)

## ToDo
- lint and prettier config
- yarn from sources + vscode sdk
- .vscode configs
- workspaces (monorepo)
- apply some patterns (DI, builder)
