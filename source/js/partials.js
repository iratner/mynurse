Handlebars.registerPartial("container", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"container\">\n\n</div>\n\n\n";
},"useData":true}));
Handlebars.registerPartial("header", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"header\">\n    <div class=\"title\">My Family Nurse (replace with logo)</div>\n</div>\n<div class=\"navbar\">\n    <ul class=\"navbar-right\">\n        <li>Login</li>\n        <li>Sign Up</li>\n    </ul>\n    <ul class=\"navbar-left\">\n        <li>Map</li>\n        <li>FAQ</li>\n        <li>Contact</li>\n    </ul>\n</div>";
},"useData":true}));
Handlebars.registerPartial("select-user-type", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"select-user-type\">\n    <div id=\"cta\">\n\n    </div>\n\n    <div id=\"user-sections\">\n        <section data-user-type=\"patient\" class=\"user-section\"></section>\n        <section data-user-type=\"guardian\" class=\"user-section\"></section>\n        <section data-user-type=\"nurse\" class=\"user-section\"></section>\n    </div>\n\n</div>";
},"useData":true}));