myApp.controller('PortfolioController', ['$scope', '$firebaseAuth', '$firebaseArray', '$firebaseObject', '$sce', function($scope, $firebaseAuth, $firebaseArray, $firebaseObject, $sce) {
    
    //update google analytics
    var url = window.location.href;
    gtag('config', 'UA-20609405-4', {
        'page_path' : '/#/portfolio',
        'page_location' : url,
        'page_title' : 'Portfolio'
    
    });
    
    var audioRef = firebase.database().ref('/audio');
    var audioInfo = $firebaseArray(audioRef);
    var guitaristAudioRef = audioRef.orderByChild("showCSMusic").equalTo(true);
    var guitaristAudioInfo = $firebaseArray(guitaristAudioRef);
    
    console.log(guitaristAudioInfo);
    $scope.audio = guitaristAudioInfo;
    console.log("Audio Object from database: "); 
    console.log($scope.audio);
    var audioplayer = $('#audio-player');
    
    function setAutoplayAudio() {
        audioplayer.attr('autoplay', 'autoplay');
    }
    function changeDisplayAudio(audio) {
        setDisplayAudio(audio);
        setAutoplayAudio();
    }
    
    function setDisplayAudio(audio) {
        $scope.displayAudio = audio;
        console.log('In audio stuff, adjusted the audio source');
        
        var link = "https://storage.googleapis.com/chrisspencercreative/audio/" + audio.src;
        
        audioplayer.attr('src', link);
        
    }
    
    audioInfo.$loaded().then(function(audioInfo) {
//        console.log('load complete');
//        console.log("length of audio array: " + audioInfo.length);
//        console.log("first Audio object");
//        console.log(audioInfo[0].showCSCreative);
        var audioArrayLength = guitaristAudioInfo.length;
        var trackNumber = Math.floor(Math.random() * (audioArrayLength));
        console.log("Random choice is: " + trackNumber);
        
//        var rec = audioInfo.$getRecord('audio1');
//        console.log('record 1 is:');
//        console.log(rec);
        var rec = guitaristAudioInfo[trackNumber];
        console.log('random pick is:');
        console.log(rec);
        
        //$scope.displayAudioSrc = srcLink;
        $scope.displayAudio = $scope.audio[trackNumber];
        console.log("Current Audio is: " + $scope.displayAudio.title);
        setDisplayAudio(rec);
    });
    
    
    
    $scope.getAudioSource = changeDisplayAudio;
                    
}]);//Controller