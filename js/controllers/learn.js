myApp.controller('LearnController', ['$scope', '$firebaseAuth', '$firebaseArray', '$firebaseObject', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject) {
        //update google analytics
    var url = window.location.href;
    gtag('config', 'UA-20609405-4', {
        'page_path' : '/#!/learn',
        'page_location' : url,
        'page_title' : 'Learn'
    
    });

}]);