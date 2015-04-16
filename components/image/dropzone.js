System.register("components/image/dropzone", [], function($__export) {
  "use strict";
  var __moduleName = "components/image/dropzone";
  var MyDropzone;
  return {
    setters: [],
    execute: function() {
      MyDropzone = $__export("MyDropzone", (function() {
        var MyDropzone = function MyDropzone() {
          this.addedfile = 0;
          this.process = 0;
          this.success = 0;
          this.queueComplete = true;
          if (!MyDropzone.isCreating) {
            throw new Error("You can't call new in Singleton instances!");
          }
        };
        return ($traceurRuntime.createClass)(MyDropzone, {load: function() {
            var that = this;
            if (!this.dropzone) {
              console.log("load");
              Dropzone.autoDiscover = false;
              this.dropzone = new Dropzone(".dropzone", {url: "http://127.0.0.1:8080/upload"});
              this.dropzone.options.createImageThumbnails = false;
              this.dropzone.options.previewTemplate = "<div></div>";
              this.dropzone.on("addedfile", function(file) {
                if (that.queueComplete) {
                  that.success = 0;
                  that.addedfile = 0;
                  that.queueComplete = false;
                }
                that.addedfile++;
                that.process++;
              });
              this.dropzone.on("success", function(file) {
                that.process--;
                that.success++;
                console.log(file.name);
              });
              this.dropzone.on("queuecomplete", function(file) {
                that.queueComplete = true;
                that.process = 0;
              });
            }
          }}, {
          getInstance: function() {
            if (MyDropzone.instance == null) {
              MyDropzone.isCreating = true;
              MyDropzone.instance = new MyDropzone();
              MyDropzone.isCreating = false;
            }
            return MyDropzone.instance;
          },
          isCreating: false
        });
      }()));
    }
  };
});
