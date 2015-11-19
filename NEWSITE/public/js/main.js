var require = require('requirejs');

// jQuery setup
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
  define( "jquery", [], function () { return jQuery; } );
}

require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    "underscore": "underscore"
  }
});


require(['modules/template'], function(template) {
  template.showName("Brandon");
});