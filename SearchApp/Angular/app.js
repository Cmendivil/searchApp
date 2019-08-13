var app = angular.module("myApp", ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainController',
            templateUrl: '/Angular/views/home.html'
        })
        .when('/addperson', {
            controller: 'AddPersonController',
            templateUrl: '/Angular/views/AddPerson.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}); 

angular.module("myApp").directive("fileInput", ["$parse", function ($parse) {
    return {
        link: function ($scope, $element, $attrs, $ngModelCtrl) {
            function createFileInput() {
                var fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.id = "myFile";
                angular.element(fileInput).on("change", function (event) {
                    $scope.$apply(function () {
                        $parse($attrs.onChange)($scope, { $event: event });
                    })
                })
                $element.append(fileInput);
            }
            createFileInput();
        }
    }
}])