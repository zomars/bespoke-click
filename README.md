[![Build Status](https://secure.travis-ci.org/zomars/bespoke-click.png?branch=master)](https://travis-ci.org/zomars/bespoke-click) [![Coverage Status](https://coveralls.io/repos/zomars/bespoke-click/badge.png)](https://coveralls.io/r/zomars/bespoke-click)

# bespoke-click

Click event for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/zomars/bespoke-click/master/dist/bespoke-click.min.js
[max]: https://raw.github.com/zomars/bespoke-click/master/dist/bespoke-click.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  click = require('bespoke-click');

bespoke.from('#presentation', [
  click()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.plugins.click()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-click
```

### Bower

```bash
$ bower install bespoke-click
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
