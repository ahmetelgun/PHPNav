document.onkeydown = function(event){
    switch (event.keyCode){
        case 37:
            var cls = document.getElementsByClassName('prev')[0];
            var hrf = cls.getElementsByTagName('a')[0].href;
            window.location = hrf;
            break;
        case 39:
            var cls = document.getElementsByClassName('next')[0];
            var hrf = cls.getElementsByTagName('a')[0].href;
            window.location = hrf;
            break;
    }
}