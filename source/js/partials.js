Handlebars.registerPartial("container", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"ns-container\">\n    <h2>Hello World</h2>\n    <h1>"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "</h1>\n    <h4>One more test</h4>\n    <h5>Last one</h5>\n</div>\n\n\n";
},"useData":true}));