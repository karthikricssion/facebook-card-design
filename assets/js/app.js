window.onload = function() {
    var isFullScreen = function() {
        return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    }

    var setFullscreenData = function(state) {
        fs.setAttribute('data-fullscreen', !!state);
    }

    var handleFullscreen = function() {
        if (isFullScreen()) {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
            else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
            setFullscreenData(false);
         }
         else {
            if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
            else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
            else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
            else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
            setFullscreenData(true);
         }
    }

    var changeButtonState = function(type) {
        
        if (type == 'playpause') {
           if (video.paused || video.ended) {
              playpause.setAttribute('data-state', 'play');
           }
           else {
              playpause.setAttribute('data-state', 'pause');
           }
        }
        
    }

    video.addEventListener('play', function() {
        changeButtonState('playpause');
    }, false);
    
    video.addEventListener('pause', function() {
        changeButtonState('playpause');
    }, false);
    
    playpause.addEventListener('click', function(e) {
        if (video.paused || video.ended) video.play();
        else video.pause();
    });

    fs.addEventListener('click', function(e) {
        handleFullscreen();
    });


    document.addEventListener('fullscreenchange', function(e) {
        setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
    });

    document.addEventListener('webkitfullscreenchange', function() {
        setFullscreenData(!!document.webkitIsFullScreen);
    });

    document.addEventListener('mozfullscreenchange', function() {
        setFullscreenData(!!document.mozFullScreen);
    });
    
    document.addEventListener('msfullscreenchange', function() {
        setFullscreenData(!!document.msFullscreenElement);
    });
}