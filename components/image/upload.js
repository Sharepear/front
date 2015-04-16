System.register("components/image/upload", ["angular2/angular2", "components/image/dropzone"], function($__export) {
  "use strict";
  var __moduleName = "components/image/upload";
  var Component,
      View,
      MyDropzone,
      ImageUpload;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      MyDropzone = $__m.MyDropzone;
    }],
    execute: function() {
      ImageUpload = $__export("ImageUpload", (function() {
        var ImageUpload = function ImageUpload() {
          console.log('component ImageUpload mounted');
          this.myDropzone = MyDropzone.getInstance();
          this.myDropzone.load();
        };
        return ($traceurRuntime.createClass)(ImageUpload, {}, {});
      }()));
      Object.defineProperty(ImageUpload, "annotations", {get: function() {
          return [new Component({
            selector: 'image-upload',
            services: [MyDropzone]
          }), new View({templateUrl: 'components/image/upload.html'})];
        }});
    }
  };
});
