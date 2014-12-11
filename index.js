'use strict';

var fs = require('fs')

exports = module.exports = function(module) {
  module.directive('component', directive)
}

exports.ctrl = ctrl
exports.directive = directive

if ('angular' in global) {
  exports(angular.module('component', []))
}

function directive() {
  return {
    scope: {
      items: '='
    },
    restrict: 'ACE',
    controller: ctrl,
    controllerAs: 'ctrl',
    template: fs.readFileSync(__dirname + '/template.html', 'utf8')
  }
}

function ctrl($scope) {
  this.items = $scope.items.map(function(item) {
    return item * 1000
  })
}
