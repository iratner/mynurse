var Nurses = (function () {

    var dataConstants = Object.freeze({
        USER_ID : 0,
        DISPLAY_NAME : 1,
        LOCATION : 2,
        CERTIFICATION_NUMBER : 3,
        YEARS_EXP : 4,
        SPECIALTY : 5,
        BIO : 6,
        RESUME : 7,
        IMAGE : 8,
        PHONE_NUM : 9,
        EMAIL : 10,
        RATING : 11,
        RATE : 12,
        AVAILABILITY : 13,
        TAGLINE : 14
    });

    var init = function () {

        // Append the main container (#ns-container)
        $('body').append(Handlebars.partials['container']());

        var $container = $('#container');

		$container.append(Handlebars.partials['header']());
        $container.append(Handlebars.partials['user-select-landing']());
        $container.append(Handlebars.partials['account-landing']());
        $container.append(Handlebars.partials['nurse-signup'](nurseDropdowns));

    }

    var initMap = function() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }

    $(document).ready(function(){
        Nurses.init();

    });

    var bindings = function() {
        $(document).on('click', '#cta-learn-more', function() {
            $('#bottom-section').scrollView();
        });

        $(document).on('click', '.panel-selector', function() {
            var $self = $(this);
            var $activePanel = $('.slideable-panel.active');
            var panelId = $self.attr('data-panel-id');

            var $selectedPanel = $('#' + panelId);
            var panelSequence = $selectedPanel.attr('data-slide-sequence');
            var activeSequence = $activePanel.attr('data-slide-sequence');

            if (activeSequence < panelSequence) {
                $activePanel.css('left', '-100%');
            } else {
                $activePanel.css('left', '100%');
            }

            $activePanel.removeClass('active');
            $selectedPanel.addClass('active');

            if (panelSequence == 1) {
                $('#bottom-section').removeClass('display-none');
            } else {
                $('#bottom-section').addClass('display-none');
            }

            $selectedPanel.css('left', '0');
        });

        $(document).on('click', '#login', function() {
            $('.header').addClass('logged-in');
            $('#container').attr('data-view-type', "logged-in");
            $('#container').find('#account-container .container-overlay').addClass('active');
            initMap();
        });
    }

    bindings();

    return {
        init: init,
        initMap : initMap,
        dataConstants : dataConstants
    }

})();

// Handlebars examples

/*Handlebars.registerHelper('list', function(items, options) {
    var out = "<ul>";

    for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
    }

    return out + "</ul>";
});


Handlebars.partials['container']({id : "id"});*/
