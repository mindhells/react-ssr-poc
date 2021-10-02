
# RSSR

React server side rendering proof of concept

## Boilerplate

*Note: we are using Nodejs 16.10 and corepack*
```bash
corepack yarn init -y
corepack yarn add -D typescript
corepack yarn add @hapi/hapi
corepack yarn add -D typescript @types/hapi__hapi @types/node
corepack yarn add -D nodemon npm-run-all
npx tsc --init
```

## Run the server

```bash
corepack yarn dev
```

## Reference docs

- [Hapi with typescript](https://www.solarwinter.net/using-typescript-with-hapi/)
- [NodeJS + React SSR](https://nils-mehlhorn.de/posts/typescript-nodejs-react-ssr)
