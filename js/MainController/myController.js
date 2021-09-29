
myApp.controller('myController', function ($scope) {
  var customers = [
  { name: "Maxine",  account: "123456",
      pin: 5674,      balance: 10000 },
    { name: "Dieb",  account: "646854",
      pin: 1234,      balance: 1000000 }
  ];
  
  $scope.authenticated = false;
  
  $scope.findAccount = function() {
    $scope.customer = _.find(customers, function(customer) {
      return customer.account == $scope.accountNumber;
    });
    if ($scope.customer) {
      $scope.accountFound = true;
    }
  };
  
  $scope.checkPin = function() {
    if ($scope.customer.pin == $scope.pin) {
      $scope.authenticated = true;
    } else {
      $scope.invalidPin = true;
    }
  };
  
  $scope.balance = function() {
    $scope.processMessage = 'Current balance: ' + $scope.customer.balance;
  }
});