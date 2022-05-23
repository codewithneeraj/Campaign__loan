function waitUntil(predicate, success, error) {
    var int = setInterval(function () {
        if (predicate()) {
            clearInterval(int);
            int = null;
            success();
        }
    }, 33);
    setTimeout(function () {
        if (int !== null) {
            clearInterval(int);
            if (typeof (error) === 'function') {
                error();
            }
        }
    },10000);
}

waitUntil(() => typeof window.jQuery == 'function' && jQuery('.iconTileContainer').length > 0, function() {
    jQuery('.iconTileContainer').after('<p>Neeraj Chauhan</p>');;
}, function() {
    alert('ERROR - Element not found')
})