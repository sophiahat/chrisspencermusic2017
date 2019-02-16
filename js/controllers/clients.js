myApp.controller('ClientController', ['$scope', '$firebaseAuth', '$firebaseArray', '$firebaseObject', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject) {
        //update google analytics
    var url = window.location.href;
    gtag('config', 'UA-20609405-4', {
        'page_path' : '/#!/clients',
        'page_location' : url,
        'page_title' : 'Clients'
    
    });
    var clientsRef = firebase.database().ref('/clients');
    var clientsInfo = $firebaseArray(clientsRef);
    $scope.clients = clientsInfo;
    $scope.clientFilter = function (item) {
        console.log (item.name + "  =  " + item.type);
        return item.type == "musician" || item.type =="band";
    };
    $scope.venueFilter = function (item) {
        console.log (item.name + " = " + item.type);
        return item.type == "venue";
    }
}]);