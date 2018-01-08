var resolve = require('./')
var test = require('tape')
var path = require('path')
var fixtures = __dirname + '/fixtures'

test('defaults to index.css', function(t) {
  t.plan(1)
  t.equal(
      resolve.sync(path.resolve(fixtures, 'default'))
    , path.resolve(fixtures, 'default/index.css')
  )
})

test('uses style field in package.json', function(t) {
  t.plan(1)
  t.equal(
      resolve.sync(path.resolve(fixtures, 'style'))
    , path.resolve(fixtures, 'style/style.css')
  )
})

test('uses main field in package.json', function(t) {
  t.plan(1)
  t.equal(
      resolve.sync(path.resolve(fixtures, 'use_main'))
    , path.resolve(fixtures, 'use_main/main.css')
  )
})

test('not uses main field in package.json', function(t) {
  t.plan(1)
  t.equal(
      resolve.sync(path.resolve(fixtures, 'not_use_main'))
    , path.resolve(fixtures, 'not_use_main/index.css')
  )
})
