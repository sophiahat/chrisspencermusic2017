myApp.controller('ServicesController', ['$scope', function($scope) {
    $scope.message = 'Services Controller';
    var url = window.location.href;
    //update google analytics
    gtag('config', 'UA-20609405-4', {
        'page_path' : '/#!/services',
        'page_location' : url,
        'page_title' : 'Services'
    
    });
    $scope.changeTrack = function(event) {
        console.log(event);
        
    
    };
    
    var masterAudio = $('#sync-audio-player');
    console.log(masterAudio);
    function changeTrack() {
        var duration, currentTrackTime;
        var track =  new Audio();
        track.src = this.dataset.link;
        console.log(track.src);
        console.log(this);
        var ratio = masterAudio[0].currentTime / masterAudio[0].duration;
        console.log('ratio: ' + ratio);
        var image = this.dataset.img;
        console.log('image link: ' +image);
        track.addEventListener('loadeddata', function() {
            duration = track.duration;
            console.log(track.duration);
            currentTrackTime = ratio*duration;
            console.log('new track progress: ' + currentTrackTime);
            masterAudio[0].src = track.src;
            if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
//            masterAudio[0].src = "https://storage.googleapis.com/chrisspencercreative/audio/" + track.src;
                masterAudio[0].currentTime = 0;

                masterAudio[0].play();
            } else {
                masterAudio[0].currentTime = currentTrackTime;
                masterAudio[0].play();
            }
            $('.services #track-image img').attr('src', image);

        });
        
        
        
    }
    
    var tracks = $('#track-picker button');

    $(tracks).each(function(index) {
        $(this).on('click', changeTrack);
    });
    $(masterAudio[0]).on('ended', function() {
        masterAudio[0].currentTime = 0;
    });
}]);//Controller