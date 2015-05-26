app.directive('url', function(){
  return {
    restrict: 'E',
    scope: false,
    controller: function($scope, UrlApi) {
      $scope.title = 'Urls';

      UrlApi.urls('', function(folders) {
        $scope.folders = folders;
      });
    },
    templateUrl: 'partials/urls.html'
  }
});
