app.factory('alldata', ['$http', function ($http) {
    return $http.get('/api/getdata')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]); 