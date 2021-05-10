[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/teniryte/esbuild-styla-plugin/graphs/commit-activity) [![Maintaner](https://img.shields.io/badge/Maintainer-teniryte-blue)](https://img.shields.io/badge/maintainer-teniryte-blue) [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://esbuild-styla-plugin.sencort.com/) [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org) [![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/) [![GitHub license](https://img.shields.io/github/license/teniryte/esbuild-styla-plugin.svg)](https://github.com/teniryte/esbuild-styla-plugin/blob/master/LICENSE) [![Profile views](https://gpvc.arturio.dev/teniryte)](https://gpvc.arturio.dev/teniryte) [![GitHub contributors](https://img.shields.io/github/contributors/teniryte/esbuild-styla-plugin.svg)](https://GitHub.com/teniryte/esbuild-styla-plugin/graphs/contributors/) [![GitHub issues](https://img.shields.io/github/issues/teniryte/esbuild-styla-plugin.svg)](https://GitHub.com/teniryte/esbuild-styla-plugin/issues/)

[![GitHub forks](https://img.shields.io/github/forks/teniryte/esbuild-styla-plugin.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/teniryte/esbuild-styla-plugin/network/) [![GitHub stars](https://img.shields.io/github/stars/teniryte/esbuild-styla-plugin.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/teniryte/esbuild-styla-plugin/stargazers/) [![GitHub watchers](https://img.shields.io/github/watchers/teniryte/esbuild-styla-plugin.svg?style=social&label=Watch&maxAge=2592000)](https://GitHub.com/teniryte/esbuild-styla-plugin/watchers/) [![GitHub followers](https://img.shields.io/github/followers/teniryte.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/teniryte?tab=followers)

# esbuild-styla-plugin

esbuild styla plugin

```js
const stylaPlugin = require('esbuild-styla-plugin');

esbuild
  .build({
    entryPoints: ['./src/index.js'],
    bundle: true,
    outfile: './dist/app/app.js',
    loader: {
      '.js': 'jsx',
    },
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    define: {
      'process.env.NODE_ENV': '"development"',
    },
    plugins: [
      stylaPlugin({
        imports: ['./styles/theme.styl'],
      }),
    ],
  });
```
