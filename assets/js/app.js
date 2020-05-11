window.onload = function() {
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
}