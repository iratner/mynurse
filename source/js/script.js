var Nurses = (function() {

    var init = function() {
        var $main = $('#main');
        var json = {id : "id"};
        
        $main.append(Handlebars.partials['container'](json));
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
