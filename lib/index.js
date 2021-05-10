'use strict';

const styla = require('styla');
const path = require('path');

module.exports = stylaPlugin;

function stylaPlugin(options) {
  let plugin = {
    name: 'styla',
    setup(build) {
      build.onResolve({ filter: /\.styl/ }, (args) => {
        return {
          path: path.resolve(args.resolveDir, args.path),
          namespace: 'styla-ns',
        };
      });

      build.onLoad({ filter: /\.styl/, namespace: 'styla-ns' }, (args) => {
        return {
          contents: styla.renderFile(args.path, {
            imports: options.imports || [],
          }),
          loader: 'css',
        };
      });
    },
  };
  return plugin;
}
