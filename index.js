'use strict';
var fs = require('fs')

exports = module.exports = function(module) {
  module.controller('ComponentCtrl', ComponentCtrl)
  module.directive('component', directive)
}

exports.ctrl = ComponentCtrl
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
    controller: 'ComponentCtrl',
    controllerAs: 'ctrl',
    template: fs.readFileSync('./template.html', 'utf8')
  }
}

function ComponentCtrl($scope) {
  this.items = $scope.items.map(function(item) {
    return item * 1000
  })
}
