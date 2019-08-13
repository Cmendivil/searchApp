app.controller('MainController', ['$scope', 'alldata', '$rootScope', function ($scope, alldata, $rootScope) {
    $rootScope.data = []
    $rootScope.spinner = true; 
    $rootScope.filteredList = [];
    alldata.success(function (data) {
        $rootScope.data = data;
        $rootScope.filteredList = $rootScope.data;
        $rootScope.spinner = false;
    });
    

    $scope.search = function () {
        $rootScope.spinner = true; 
        $rootScope.filteredList = _.filter($rootScope.data,
        function (item) {
            return searchUtil(item, $scope.searchText);
            });

        if ($scope.searchText == '') {
            $rootScope.filteredList = $rootScope.data;
        } 
        $rootScope.spinner = false;
    };

    
}]);

function searchUtil(item, toSearch) {
    return (item.first_name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.last_name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1) ? true : false;
};