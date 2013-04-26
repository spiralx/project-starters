;(function() {
  "use strict";

  require.config({
    //baseUrl: "./",
    paths: {
      "jquery": "../../components/jquery/jquery"
    }
  });

  requirejs.onError = function(e) {
    console.info(e.requireType);
    console.dir(e.requireModules);
  };

  require(["app"], function(app) {


  }, function(e) {
    console.info(e.requireType);
    console.dir(e.requireModules);
  });
})();
