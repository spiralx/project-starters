## project-starters

A set of different starting points for new web projects, using different combinations of libraries and technologies. The idea is partly to have something I can just copy to my dev folder and start working on, but it's also a way to learn new techniques and tools as I get interested in them.

The current starters listed below are roughly in order of complexity.

#### 01: basic-html5-page

A single page with a basic navigation bar and hero unit, empty `css\main.css` and `js\main.js` files, and local copies of the jQuery and Twitter Bootstrap libraries.

- [jQuery](http://jquery.com)
- [Bootstrap](http://twitter.github.com/bootstrap)

#### 02: page-using-components

The same page as before, but now the dependencies are managed using Bower to pull in remote components, and the page's code is stored under an `app` directory.

    bower install

- [Bower](http://twitter.github.com/bower/)
- [bootstrap-latest](http://github.com/spiralx/bootstrap-latest/) - just v2.3.1 asset files.

#### 03: requirejs-amd

Instead of manually adding `<script>` tags to `index.html`, we instead use `require.js` to manage dependencies and load scripts. This requires us to make sure all of our code is written as AMD modules, and we now have a single entry point `app\js\main.js` which configures `require.js` and loads the application code, now at `app\js\app.js`.

- [RequireJS](http://requirejs.org/)
- [Writing Modular JavaScript With AMD, CommonJS & ES Harmony](http://addyosmani.com/writing-modular-js/)

