$.routes({'/': function(){$('.wrap-main').load('sites/home.html',function(response ,status,
                                                         xhr) {
            if(status == "error") {
                $('.wrap-main').load("404.html");
            }
        });
        var response = $.ajax({
            url: 'aside_menu.html',
            success: function(result){
                $('.wrap-aside' ).html(result);
                colorize();
            },
            async: false
        });
        colorize();
    },
    '/:name': function(params){
        $('.wrap-main').load('sites/' + params.name + '.html', function(response,
                                                                        status,
                                                                        xhr) {
            if(status == "error") {
                $('.wrap-main').load("404.html");
            }
        });
        $.ajax({
            url: 'aside_menu.html',
            success: function(result){
                $('.wrap-aside' ).html(result);
                colorize();
            },
            async: false
        });
    },
    '/:folder/:name': function(params){
        $('.wrap-main').load('sites/' + params.folder +
            '/' + params.name + '.html', function(response,
                                                  status,
                                                  xhr) {
            if(status == "error") {
                $('.wrap-main').load("404.html");
            }
        });

        $.ajax({
            url: 'sites/' + params.folder +
            '/_aside_menu.html',
            success: function(result){
                $('.wrap-aside' ).html(result);
                colorize();
            },
            error: function(xhr, status, error) {
                $.ajax({
                    url: 'aside_menu.html',
                    success: function(result){
                        $('.wrap-aside' ).html(result);
                        colorize();
                    },
                    async: false
                });
            },
            async: false
        });
    },
    '/:folder/:name/:anchor': function(params){
        /*var regex = /.*#\/(\w*)\/(\w*)\/(\w*)/
        var url = regex.exec(document.URL);
        if(!(url[1] == params.folder && url[2] == params.name && url[3] == params.anchor)) {
	$('.wrap-main').load('sites/' + params.folder +
            '/' + params.name + '.html', function(response,
                                                  status,
                                                  xhr) {
            if(status == "error") {
                $('.wrap-main').load("404.html");
                return;
            }
        });
        }*/
        $(window).scrollTop($('#' + /.*#\/(\w*)\/(\w*)\/(\w*)/.exec(document.URL)[3]).offset().top);
    }
});

function colorize() {
    $('.wrap-aside > ul a').removeClass("current-page");
    $('.wrap-aside > ul a[href=' + window.location.hash + ']').addClass("current-page");
}
