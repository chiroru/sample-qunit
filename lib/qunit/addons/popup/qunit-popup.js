(function( QUnit ) {
    var openWindow = function(target) {
        var w = window.open(target + "?num"+parseInt(Math.random()*1000), name, 'left=0,top=0,width=500,height=500,toolbar=1,resizable=0' );
        return w;
    };

    QUnit.extend( QUnit, {
        popupWindow:[],
        forkTest: function(name, target, callback) {
            QUnit.popupWindow[name] = openWindow(target);
            var interval = setInterval(function() {
                if (QUnit.popupWindow[name] && QUnit.popupWindow[name].$ && QUnit.popupWindow[name].jQuery.isReady) {
                    clearInterval(interval);
                    test(name, callback);
                } 
            }, 0);
        }
    });
}(QUnit));