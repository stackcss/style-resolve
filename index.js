var resolver = require('resolve')
var xtend    = require('xtend')

// Nothing in core for the time being
var core = {}
var exts = [
  '.css'
]

module.exports       = resolve
module.exports.async = resolve
module.exports.sync  = resolveSync

function resolve(target, opts, next) {
  return resolver(target
    , styleOpts(opts || {})
    , next
  )
}

function resolveSync(target, opts) {
  return resolver.sync(target
    , styleOpts(opts || {})
  )
}

function styleOpts(opts) {
  return xtend(opts, {
      modules: core
    , extensions: exts
    , packageFilter: packageFilter
  })
}

function packageFilter(pkg, root) {
  pkg.main = pkg.style
    ? pkg.style
    : 'index.css'

  return pkg
}
