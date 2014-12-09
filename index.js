'use strict';

exports = module.exports = function(module) {
  module.directive('~~componentname~~', directive)
}

exports.directive = directive

if ('angular' in global) {
  exports(angular.module('~~modulename~~', []))
}

function directive($log) {
  return {
    restrict: 'ACE',
    controller: function($log) {
      this.helloWorld = function() {
        $log.log('Hello World!')
      }
    },
    link: function(scope, element, attrs, ctrl) {
      $log.log(scope, element, attrs)
      ctrl.helloWorld()
    }
  }
}
