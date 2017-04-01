var Nurses = (function() {

    var $mainContainer = $('#ns-container');

    var init = function() {

        // Append the main container (#ns-container)
        $('body').append(Handlebars.partials['container']());
    }

    return {
        init : init
    }

})(jQuery);

// Handlebars examples

/*Handlebars.registerHelper('list', function(items, options) {
    var out = "<ul>";

    for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
    }

    return out + "</ul>";
});


Handlebars.partials['container']({id : "id"});*/
