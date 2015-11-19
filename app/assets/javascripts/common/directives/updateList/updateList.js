angular.module('directives').directive('updateList', function() {
  return {
    restrict: "E",
    templateUrl: "common/directives/updateList/updateList.html",
    scope: {
      updates: "=",
      team: "=",

      // Optional columns to include
      include:       "=",
      setParams: "&"
    },
    link: function(scope, element, attrs) {
    }
  };
});
