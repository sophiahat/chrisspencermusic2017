myApp.controller('ServicesController', ['$scope', function($scope) {
    $scope.message = 'Services Controller';
    var url = window.location.href;
    //update google analytics
    gtag('config', 'UA-20609405-4', {
        'page_path' : '/#!/services',
        'page_location' : url,
        'page_title' : 'Services'
    
    });
}]);//Controller