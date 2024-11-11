// Define the Angular module
const app = angular.module('loginApp', []);

// Define the LoginController
app.controller('LoginController', ['$scope', function ($scope) {
  // Initialize the user object
  $scope.user = {
    username: '',
    password: ''
  };

  // Error message to be displayed if login fails
  $scope.errorMessage = '';

  // Function to handle form submission
  $scope.submitForm = function () {
    if ($scope.user.username === 'admin' && $scope.user.password === 'password') {
      alert('Login successful!');
      $scope.errorMessage = '';
    } else {
      $scope.errorMessage = 'Invalid username or password!';
    }
  };
}]);
