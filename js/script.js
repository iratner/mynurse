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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIE51cnNlcyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZGF0YUNvbnN0YW50cyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBVU0VSX0lEIDogMCxcbiAgICAgICAgRElTUExBWV9OQU1FIDogMSxcbiAgICAgICAgTE9DQVRJT04gOiAyLFxuICAgICAgICBDRVJUSUZJQ0FUSU9OX05VTUJFUiA6IDMsXG4gICAgICAgIFlFQVJTX0VYUCA6IDQsXG4gICAgICAgIFNQRUNJQUxUWSA6IDUsXG4gICAgICAgIEJJTyA6IDYsXG4gICAgICAgIFJFU1VNRSA6IDcsXG4gICAgICAgIElNQUdFIDogOCxcbiAgICAgICAgUEhPTkVfTlVNIDogOSxcbiAgICAgICAgRU1BSUwgOiAxMCxcbiAgICAgICAgUkFUSU5HIDogMTEsXG4gICAgICAgIFJBVEUgOiAxMixcbiAgICAgICAgQVZBSUxBQklMSVRZIDogMTMsXG4gICAgICAgIFRBR0xJTkUgOiAxNFxuICAgIH0pO1xuXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBtYWluIGNvbnRhaW5lciAoI25zLWNvbnRhaW5lcilcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZChIYW5kbGViYXJzLnBhcnRpYWxzWydjb250YWluZXInXSgpKTtcblxuICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICQoJyNjb250YWluZXInKTtcblxuXHRcdCRjb250YWluZXIuYXBwZW5kKEhhbmRsZWJhcnMucGFydGlhbHNbJ2hlYWRlciddKCkpO1xuICAgICAgICAkY29udGFpbmVyLmFwcGVuZChIYW5kbGViYXJzLnBhcnRpYWxzWyd1c2VyLXNlbGVjdC1sYW5kaW5nJ10oKSk7XG4gICAgICAgICRjb250YWluZXIuYXBwZW5kKEhhbmRsZWJhcnMucGFydGlhbHNbJ2FjY291bnQtbGFuZGluZyddKCkpO1xuICAgICAgICAkY29udGFpbmVyLmFwcGVuZChIYW5kbGViYXJzLnBhcnRpYWxzWydudXJzZS1zaWdudXAnXShudXJzZURyb3Bkb3ducykpO1xuXG4gICAgfVxuXG4gICAgdmFyIGluaXRNYXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVsdXJ1ID0ge2xhdDogLTI1LjM2MywgbG5nOiAxMzEuMDQ0fTtcbiAgICAgICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG4gICAgICAgICAgICB6b29tOiA0LFxuICAgICAgICAgICAgY2VudGVyOiB1bHVydVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246IHVsdXJ1LFxuICAgICAgICAgICAgbWFwOiBtYXBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgTnVyc2VzLmluaXQoKTtcblxuICAgIH0pO1xuXG4gICAgdmFyIGJpbmRpbmdzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjY3RhLWxlYXJuLW1vcmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJyNib3R0b20tc2VjdGlvbicpLnNjcm9sbFZpZXcoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYW5lbC1zZWxlY3RvcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciAkYWN0aXZlUGFuZWwgPSAkKCcuc2xpZGVhYmxlLXBhbmVsLmFjdGl2ZScpO1xuICAgICAgICAgICAgdmFyIHBhbmVsSWQgPSAkc2VsZi5hdHRyKCdkYXRhLXBhbmVsLWlkJyk7XG5cbiAgICAgICAgICAgIHZhciAkc2VsZWN0ZWRQYW5lbCA9ICQoJyMnICsgcGFuZWxJZCk7XG4gICAgICAgICAgICB2YXIgcGFuZWxTZXF1ZW5jZSA9ICRzZWxlY3RlZFBhbmVsLmF0dHIoJ2RhdGEtc2xpZGUtc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVTZXF1ZW5jZSA9ICRhY3RpdmVQYW5lbC5hdHRyKCdkYXRhLXNsaWRlLXNlcXVlbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVTZXF1ZW5jZSA8IHBhbmVsU2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlUGFuZWwuY3NzKCdsZWZ0JywgJy0xMDAlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRhY3RpdmVQYW5lbC5jc3MoJ2xlZnQnLCAnMTAwJScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkYWN0aXZlUGFuZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJHNlbGVjdGVkUGFuZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBpZiAocGFuZWxTZXF1ZW5jZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgJCgnI2JvdHRvbS1zZWN0aW9uJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjYm90dG9tLXNlY3Rpb24nKS5hZGRDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzZWxlY3RlZFBhbmVsLmNzcygnbGVmdCcsICcwJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbG9naW4nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5oZWFkZXInKS5hZGRDbGFzcygnbG9nZ2VkLWluJyk7XG4gICAgICAgICAgICAkKCcjY29udGFpbmVyJykuYXR0cignZGF0YS12aWV3LXR5cGUnLCBcImxvZ2dlZC1pblwiKTtcbiAgICAgICAgICAgICQoJyNjb250YWluZXInKS5maW5kKCcjYWNjb3VudC1jb250YWluZXIgLmNvbnRhaW5lci1vdmVybGF5JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaW5pdE1hcCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kaW5ncygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdCxcbiAgICAgICAgaW5pdE1hcCA6IGluaXRNYXAsXG4gICAgICAgIGRhdGFDb25zdGFudHMgOiBkYXRhQ29uc3RhbnRzXG4gICAgfVxuXG59KSgpO1xuXG4vLyBIYW5kbGViYXJzIGV4YW1wbGVzXG5cbi8qSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcignbGlzdCcsIGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgdmFyIG91dCA9IFwiPHVsPlwiO1xuXG4gICAgZm9yKHZhciBpPTAsIGw9aXRlbXMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICBvdXQgPSBvdXQgKyBcIjxsaT5cIiArIG9wdGlvbnMuZm4oaXRlbXNbaV0pICsgXCI8L2xpPlwiO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQgKyBcIjwvdWw+XCI7XG59KTtcblxuXG5IYW5kbGViYXJzLnBhcnRpYWxzWydjb250YWluZXInXSh7aWQgOiBcImlkXCJ9KTsqL1xuIl0sImZpbGUiOiJzY3JpcHQuanMifQ==
