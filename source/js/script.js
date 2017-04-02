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
        var marker1 = {lat: 39.965514, lng: -82.989893};
        //var marker2 = {lat: 39.967, lng: -82.99};
        //var marker3 = {lat: 39.977, lng: -82.80};
        //var marker4 = {lat: 40.965514, lng: -83.989893};
        //var marker5 = {lat: 38.965514, lng: -81.989893};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: marker1,
            styles: [
                {elementType: 'geometry', stylers: [{color: '#303160'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                }
            ]
        });

        var locations = [
            ['test', 39.965514, -82.989893, 4],
            ['test 2', 39.967, -82.99, 5],
            ['test 3', 39.977, -82.80, 3],
            ['test 4', 40.965514, -83.989893, 2],
            ['test 5', 38.965514, -81.989893, 1]
        ];

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });
        }

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

        });

        $(document).on('click', '.service-type', function() {
            var $self = $(this);
            $self.addClass('selected');
            $('.nurse-map-view').addClass('active');
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
