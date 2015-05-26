app.factory('UrlApi', ['$resource', function($resource) {
  // FIXME: move API url to constant
  return $resource('http://localhost:3000/:collection', {}, {
    urls: { params: { collection: 'urls' }, method: 'GET', isArray: false }
  });
}]);
