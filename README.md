# TinyMCE Webpack Example

This page gives an example of how to bundle TinyMCE using webpack. This however
is **not** an endorsement of bundling TinyMCE. 

It is frequently much better to serve the `tinymce` folder along with your
static files as TinyMCE was designed to load components as needed so bundling
adds a lot of complexity, restricts the ability to load translations based on
configuration and may in some cases actually slow down loading of the
editor.

## Reasons not to bundle

1. Bundling is complex
2. Letting TinyMCE prioritize load order can result in faster display time
2. Plugins request translations at load time so some plugins can not be bundled 
without locking you to a single language.

### Alternatives to bundling

1. Load from [cloud](https://www.tiny.cloud/auth/signup/)
2. Put the `tinymce` folder in a location for static files, such as the `public` folder in a project created by [`npx express-generator`](http://expressjs.com/en/starter/generator.html) or [`npx create-react-app`](https://create-react-app.dev/docs/getting-started).
3. Bundling of the core editor combined with hosting the files as in point 2 and setting the global `tinymce.EditorManager.baseURL` to the URL where the files are hosted and setting `tinymce.EditorManager.suffix` to `"min"`.

## How to read this example

The main files to read are:
- [`src/editor.js`](src/editor.js) - which lists all the files you need to load to get TinyMCE working.
- [`webpack.config.js`](webpack.config.js) - which shows a simple way to configure webpack.

This example uses the Webpack plugins:
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - to read CSS files.
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - to put CSS files on the page.
- [`raw-loader`](https://www.npmjs.com/package/raw-loader) - to load files (in this case CSS files) as a string.

## How to run this example
Assuming you have `yarn` and `python` installed:
```sh
yarn install
yarn build
python3 -m http.server
```
Then open the URL that python3 displays which should be something like [`http://0.0.0.0:8000/`](http://0.0.0.0:8000/).

A simple webpage showing TinyMCE should be displayed.