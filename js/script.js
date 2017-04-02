var Nurses = (function () {

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
        initMap : initMap
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIE51cnNlcyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIG1haW4gY29udGFpbmVyICgjbnMtY29udGFpbmVyKVxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKEhhbmRsZWJhcnMucGFydGlhbHNbJ2NvbnRhaW5lciddKCkpO1xuXG4gICAgICAgIHZhciAkY29udGFpbmVyID0gJCgnI2NvbnRhaW5lcicpO1xuXG5cdFx0JGNvbnRhaW5lci5hcHBlbmQoSGFuZGxlYmFycy5wYXJ0aWFsc1snaGVhZGVyJ10oKSk7XG4gICAgICAgICRjb250YWluZXIuYXBwZW5kKEhhbmRsZWJhcnMucGFydGlhbHNbJ3VzZXItc2VsZWN0LWxhbmRpbmcnXSgpKTtcbiAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQoSGFuZGxlYmFycy5wYXJ0aWFsc1snYWNjb3VudC1sYW5kaW5nJ10oKSk7XG4gICAgICAgICRjb250YWluZXIuYXBwZW5kKEhhbmRsZWJhcnMucGFydGlhbHNbJ251cnNlLXNpZ251cCddKG51cnNlRHJvcGRvd25zKSk7XG5cbiAgICB9XG5cbiAgICB2YXIgaW5pdE1hcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdWx1cnUgPSB7bGF0OiAtMjUuMzYzLCBsbmc6IDEzMS4wNDR9O1xuICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgICAgIHpvb206IDQsXG4gICAgICAgICAgICBjZW50ZXI6IHVsdXJ1XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogdWx1cnUsXG4gICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICBOdXJzZXMuaW5pdCgpO1xuXG4gICAgfSk7XG5cbiAgICB2YXIgYmluZGluZ3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNjdGEtbGVhcm4tbW9yZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnI2JvdHRvbS1zZWN0aW9uJykuc2Nyb2xsVmlldygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnBhbmVsLXNlbGVjdG9yJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyICRhY3RpdmVQYW5lbCA9ICQoJy5zbGlkZWFibGUtcGFuZWwuYWN0aXZlJyk7XG4gICAgICAgICAgICB2YXIgcGFuZWxJZCA9ICRzZWxmLmF0dHIoJ2RhdGEtcGFuZWwtaWQnKTtcblxuICAgICAgICAgICAgdmFyICRzZWxlY3RlZFBhbmVsID0gJCgnIycgKyBwYW5lbElkKTtcbiAgICAgICAgICAgIHZhciBwYW5lbFNlcXVlbmNlID0gJHNlbGVjdGVkUGFuZWwuYXR0cignZGF0YS1zbGlkZS1zZXF1ZW5jZScpO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZVNlcXVlbmNlID0gJGFjdGl2ZVBhbmVsLmF0dHIoJ2RhdGEtc2xpZGUtc2VxdWVuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZVNlcXVlbmNlIDwgcGFuZWxTZXF1ZW5jZSkge1xuICAgICAgICAgICAgICAgICRhY3RpdmVQYW5lbC5jc3MoJ2xlZnQnLCAnLTEwMCUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZVBhbmVsLmNzcygnbGVmdCcsICcxMDAlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRhY3RpdmVQYW5lbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkc2VsZWN0ZWRQYW5lbC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmIChwYW5lbFNlcXVlbmNlID09IDEpIHtcbiAgICAgICAgICAgICAgICAkKCcjYm90dG9tLXNlY3Rpb24nKS5yZW1vdmVDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNib3R0b20tc2VjdGlvbicpLmFkZENsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNlbGVjdGVkUGFuZWwuY3NzKCdsZWZ0JywgJzAnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNsb2dpbicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLmhlYWRlcicpLmFkZENsYXNzKCdsb2dnZWQtaW4nKTtcbiAgICAgICAgICAgICQoJyNjb250YWluZXInKS5hdHRyKCdkYXRhLXZpZXctdHlwZScsIFwibG9nZ2VkLWluXCIpO1xuICAgICAgICAgICAgJCgnI2NvbnRhaW5lcicpLmZpbmQoJyNhY2NvdW50LWNvbnRhaW5lciAuY29udGFpbmVyLW92ZXJsYXknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBpbml0TWFwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRpbmdzKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0LFxuICAgICAgICBpbml0TWFwIDogaW5pdE1hcFxuICAgIH1cblxufSkoKTtcblxuLy8gSGFuZGxlYmFycyBleGFtcGxlc1xuXG4vKkhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2xpc3QnLCBmdW5jdGlvbihpdGVtcywgb3B0aW9ucykge1xuICAgIHZhciBvdXQgPSBcIjx1bD5cIjtcblxuICAgIGZvcih2YXIgaT0wLCBsPWl0ZW1zLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgXCI8bGk+XCIgKyBvcHRpb25zLmZuKGl0ZW1zW2ldKSArIFwiPC9saT5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0ICsgXCI8L3VsPlwiO1xufSk7XG5cblxuSGFuZGxlYmFycy5wYXJ0aWFsc1snY29udGFpbmVyJ10oe2lkIDogXCJpZFwifSk7Ki9cbiJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
