System.register("components/album/add", ["angular2/angular2", "angular2/di", "components/album/service"], function($__export) {
  "use strict";
  var __moduleName = "components/album/add";
  var Component,
      View,
      Inject,
      AlbumService,
      AlbumAdd;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      Inject = $__m.Inject;
    }, function($__m) {
      AlbumService = $__m.AlbumService;
    }],
    execute: function() {
      AlbumAdd = $__export("AlbumAdd", (function() {
        var AlbumAdd = function AlbumAdd() {
          console.log('component AlbumAdd mounted');
          this.albumService = AlbumService.getInstance();
        };
        return ($traceurRuntime.createClass)(AlbumAdd, {}, {});
      }()));
      Object.defineProperty(AlbumAdd, "annotations", {get: function() {
          return [new Component({
            selector: 'album-add',
            services: [AlbumService]
          }), new View({templateUrl: 'components/album/add.html'})];
        }});
    }
  };
});
