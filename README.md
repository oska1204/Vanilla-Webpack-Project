# Vanilla Webpack Project

Git clone of [react-full-project](https://github.com/Jimmydalecleveland/webpack-starters/tree/react-full-project), with react stripped away.

Video leading to that project: [Webpack 5 Full Project Setup](https://www.youtube.com/watch?v=TOb1c39m64A&list=PLmZPx_9ZF_sB4orswXdpThGMX9ii2uP7Z&index=7).

A template for Webpack.

I don't know how to write webpack plugins, so my implementation is scuffed. So hot reload kinda works, but not really.

A full project setup for Vinilla js.

Here are some other things this project supports:

- Latest stable ES version transpiling through `@babel/preset-env` and `babel-loader`.
- importing `.css` files into javascript files through `css-loader`.
- Sass: `.scss` and `.sass` formats through `sass-loader` and dart sass (`sass`) package.
- importing images (including `.svg`) through `import` syntax in javascript and `url()` syntax in css.
- automatically inlining images less than 8kb (webpack default, which is configurable) into the javascript bundle output. Anything over 8kb will be created as a resource file in the final output folder.
- `html-webpack-plugin@next` for outputting an `index.html` from a template for proper production builds support. _NOTE: `html-webpack-plugin` currently recommends installing the @next version for Webpack 5 support_
- `clean-webpack-plugin` for automatic cleanup of the output directory (`dist/`) on each build.

## Start using for a new project, or playground

1. Clone the repo
2. Run `npm i` to install dependencies
3. Run one of the following commands, depending on intent:

### Production Build

```bash
npm run build
```

### Production Build on Unix

```bash
npm run build-unix
```

### Development Build

```bash
npm run build-dev
```

### Development Build, watching for file changes

```bash
npm run watch
```

### Development Server on port :8080

```bash
npm start
```

## See output without browser

After running a build command, you can see the output without opening a browser by running:

```bash
node dist/main.js
```
