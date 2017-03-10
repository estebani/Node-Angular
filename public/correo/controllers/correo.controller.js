angular.module('correo').controller('correoController', ['$scope', 'Authentication', '$http',
  function($scope, Authentication, $http) {
    $scope.authentication = Authentication;
    $scope.formData = {};

    $scope.enviarcorreo = function(){
        console.log($scope.formData)
        $http.get('/send', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };
  }
]);
