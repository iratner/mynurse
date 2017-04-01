Handlebars.registerPartial("container", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"container\">\n\n</div>\n\n\n";
},"useData":true}));
Handlebars.registerPartial("header", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"header\">\n    <div class=\"title\">My Family Nurse (replace with logo)</div>\n</div>\n<div class=\"navbar\">\n    <ul class=\"navbar-right\">\n        <li>Login</li>\n        <li>Sign Up</li>\n    </ul>\n    <ul class=\"navbar-left\">\n        <li>Map</li>\n        <li>FAQ</li>\n        <li>Contact</li>\n    </ul>\n</div>";
},"useData":true}));
Handlebars.registerPartial("nurse-signup", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <option value=\""
    + alias4(((helper = (helper = helpers.yrs_xp_id || (depth0 != null ? depth0.yrs_xp_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"yrs_xp_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.yrs_xp || (depth0 != null ? depth0.yrs_xp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"yrs_xp","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <option value=\""
    + alias4(((helper = (helper = helpers.speciality_id || (depth0 != null ? depth0.speciality_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speciality_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"nurse-signup\">\n    <h1>Sign Up</h1>\n    <div class=\"signup-form\">\n        <legend>First Name</legend>\n        <div>\n            <label>\n                <input type=\"text\" name=\"firstname\" id=\"firstname\" >\n            </label>\n        </div>\n        <legend>Last Name</legend>\n        <div>\n            <label>\n                <input type=\"text\" name=\"lastname\" id=\"lastname\" >\n            </label>\n        </div>\n        <legend>User Name</legend>\n        <div>\n            <label>\n                <input type=\"text\" name=\"display_nm\" id=\"display_nm\" >\n            </label>\n        </div>\n        <legend>Email Address</legend>\n        <div>\n            <label>\n                <input type=\"email\" name=\"email\" id=\"email\" >\n            </label>\n        </div>\n        <legend>Phone Number</legend>\n        <div>\n            <label>\n                <input type=\"tel\" name=\"ph_num\" id=\"ph_num\" >\n            </label>\n        </div>\n        <legend>RN Certificate Number</legend>\n        <div>\n            <label>\n                <input type=\"text\" name=\"rn_certnum\" id=\"rn_certnum\" >\n            </label>\n        </div>\n        <legend>Years of Experience</legend>\n        <div>\n            <select name=\"Experience\" id=\"yrs_xp\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.experience : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n        <legend>Specialty</legend>\n        <div>\n            <select name=\"specialty\" id=\"specialty\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.specialty : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </div>\n        <legend>Bio</legend>\n        <div>\n            <textarea rows=\"4\" cols=\"50\"></textarea>\n        </div>\n        <legend>Upload Resume</legend>\n        <div>\n            <input type=\"file\" name=\"resume\" id=\"resume\">\n            <input type=\"submit\" value=\"Upload Resume\" name=\"submit\">\n        </div>\n        <legend>Profile Picture</legend>\n        <div>\n            <input type=\"file\" name=\"image\" id=\"image\">\n            <input type=\"submit\" value=\"Upload Profile Picture\" name=\"submit\">\n        </div>\n    </div>\n</div>";
},"useData":true}));
Handlebars.registerPartial("select-user-type", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"select-user-type\">\n    <div id=\"cta\">\n\n    </div>\n\n    <div id=\"user-sections\">\n        <section data-user-type=\"patient\" class=\"user-section\"></section>\n        <section data-user-type=\"guardian\" class=\"user-section\"></section>\n        <section data-user-type=\"nurse\" class=\"user-section\"></section>\n    </div>\n\n</div>";
},"useData":true}));