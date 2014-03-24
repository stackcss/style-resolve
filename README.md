# style-resolve [![stable](http://hughsk.github.io/stability-badges/dist/stable.svg)](http://github.com/hughsk/stability-badges) #

A wrapper for the "resolve" module that targets CSS instead of JavaScript

## Usage ##

[![style-resolve](https://nodei.co/npm/style-resolve.png?mini=true)](https://nodei.co/npm/style-resolve)

The API is equivalent for both `resolve.async` and `resolve.sync`, with the
following exceptions:

* Node's core modules are excluded.
* The "main" file for a module is specified with the "style" key instead,
  defaulting to `index.css`.
* Currently accepts implicit usage of the `.css` extension by default – though
  pull requests are welcome to make additions.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/style-resolve/blob/master/LICENSE.md) for details.
