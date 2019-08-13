app.controller('AddPersonController', ['$scope', '$http', function ($scope, $http) {
    $scope.model = {};
    $scope.model.picture = "/media/user.png";
    $scope.error = "";
    $scope.picture = "";

    $scope.sendForm = function () {
        if (valid()){
            $http({
                method: 'POST',
                url: '/api/adddata',
                data: $scope.model
            }).success(function (data, status, headers, config) {
                uploadFile();
                window.location.href = "#";
            }).error(function (data, status, headers, config) {
            });
        }
    };

    $scope.uploadPicture = function (elem) {
        $scope.model.picture = "/media/" + elem.target.files[0].name;
        $scope.picture = elem.target.files[0];
    };


    function uploadFile() {
        var fileInput = document.getElementById("myFile");

        if (fileInput.files.length === 0) return;

        var file = fileInput.files[0];

        var payload = new FormData();
        payload.append("file", file);

        $http.post("/api/addpicture/", payload, {
            transformRequest: angular.identity,
            headers: { "Content-Type": undefined }
        }).then(function (data) {
            console.log("succ");
        }, function (error) {
            console.log(error);
        });
    }

    function valid() {
        $scope.error = "";
        if (!$scope.model.first_name.match("^[a-zA-Z]+$")) {
            $scope.error = "First name field should only include alphabetic characters";
            return false;
        }
        if (!$scope.model.last_name.match("^[a-zA-Z]+$")) {
            $scope.error = "Last name field should only include alphabetic characters";
            return false;
        }

        return true

    }
}]);