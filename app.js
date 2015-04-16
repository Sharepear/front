System.register("app", ["angular2/angular2", "components/sharepear/sharepear"], function($__export) {
  "use strict";
  var __moduleName = "app";
  var bootstrap,
      Sharepear;
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Sharepear = $__m.Sharepear;
    }],
    execute: function() {
      bootstrap(Sharepear);
    }
  };
});
