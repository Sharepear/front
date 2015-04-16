System.register("components/image/show", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "components/image/show";
  var Component,
      View,
      ImageShow;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      ImageShow = $__export("ImageShow", (function() {
        var ImageShow = function ImageShow() {
          console.log('component ImageShow mounted');
        };
        return ($traceurRuntime.createClass)(ImageShow, {}, {});
      }()));
      Object.defineProperty(ImageShow, "annotations", {get: function() {
          return [new Component({selector: 'image-show'}), new View({template: '<img src="{{ url }}" alt="{{ name }}" />'})];
        }});
    }
  };
});
