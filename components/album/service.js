System.register("components/album/service", [], function($__export) {
  "use strict";
  var __moduleName = "components/album/service";
  var AlbumService;
  return {
    setters: [],
    execute: function() {
      AlbumService = $__export("AlbumService", (function() {
        var AlbumService = function AlbumService() {
          if (!AlbumService.isCreating) {
            throw new Error("You can't call new in Singleton instances!");
          }
          this.list = [{
            name: 'test',
            images: [{
              name: "Image1",
              url: "http://lorempixel.com/400/200/"
            }, {
              name: "Image2",
              url: "http://lorempixel.com/400/200/"
            }, {
              name: "Image3",
              url: "http://lorempixel.com/400/200/"
            }]
          }];
        };
        return ($traceurRuntime.createClass)(AlbumService, {
          select: function(album) {
            console.log('AlbumService select: ' + album.name);
            this.album = album;
          },
          add: function(name) {
            console.log('AlbumService add: ' + name);
            this.list.push({name: name});
          },
          remove: function(el) {
            var index = this.list.indexOf(el);
            if (index > -1) {
              this.list.splice(index, 1);
              return true;
            }
            return false;
          },
          contains: function(el) {
            return this.list.indexOf(el) !== -1;
          }
        }, {
          getInstance: function() {
            if (AlbumService.instance == null) {
              AlbumService.isCreating = true;
              AlbumService.instance = new AlbumService();
              AlbumService.isCreating = false;
            }
            return AlbumService.instance;
          },
          isCreating: false
        });
      }()));
      Object.defineProperty(AlbumService.prototype.add, "parameters", {get: function() {
          return [[$traceurRuntime.type.string]];
        }});
    }
  };
});
