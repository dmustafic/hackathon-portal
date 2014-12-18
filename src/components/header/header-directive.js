angular.module('headerDirective', [])

.constant('headerTemplatePath', hack.rootPath + '/dist/templates/components/header/header.html')

.directive('hackHeader', function (headerTemplatePath) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
    },
    templateUrl: headerTemplatePath,
    link: function (scope, element, attrs) {
    }
  };
});