myApp.controller('GigsController', ['$scope', function($scope) {
        //update google analytics
    var url = window.location.href;
    gtag('config', 'UA-20609405-4', {
        'page_path' : '/#!/gigs',
        'page_location' : url,
        'page_title' : 'Gigs'
    
    });
    $('iframe').load(function() {
        console.log('Iframe loaded');
    });//iframe loaded
}]);//controller