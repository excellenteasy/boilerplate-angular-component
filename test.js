'use strict'
var test = require('tape')
var component = require('./')

test('component exports a function', function (t) {
  t.plan(1)
  t.equal('function', typeof component, 'component is of type function')
})
