import { Request, ResponseToolkit } from "@hapi/hapi";
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { App } from '../../client/components/app'; // @TODO: use aliases to avoid relative imports

const manifest = fs.readFileSync(
  path.join(__dirname, 'static/manifest.json'),
  'utf-8'
);

const assets = JSON.parse(manifest);

export function demo(request: Request, h: ResponseToolkit) {
  console.log("Processing demo request", request.info.id);
  const component = ReactDOMServer.renderToString(React.createElement(App));
  return h.view('demo', { assets, component });
}
