System.register("components/album/show", ["angular2/angular2", "components/album/service", "components/album/chromatic", "components/router/service", "components/image/upload"], function($__export) {
  "use strict";
  var __moduleName = "components/album/show";
  var Component,
      View,
      If,
      For,
      AlbumService,
      AlbumChromatic,
      RouterService,
      ImageUpload,
      AlbumShow;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      If = $__m.If;
      For = $__m.For;
    }, function($__m) {
      AlbumService = $__m.AlbumService;
    }, function($__m) {
      AlbumChromatic = $__m.AlbumChromatic;
    }, function($__m) {
      RouterService = $__m.RouterService;
    }, function($__m) {
      ImageUpload = $__m.ImageUpload;
    }],
    execute: function() {
      AlbumShow = $__export("AlbumShow", (function() {
        var AlbumShow = function AlbumShow() {
          console.log('component AlbumShow mounted');
          this.albumService = AlbumService.getInstance();
          this.routerService = RouterService.getInstance();
        };
        return ($traceurRuntime.createClass)(AlbumShow, {remove: function() {
            this.routerService.displayAlbumList();
            this.albumService.remove(this.albumService.album);
          }}, {});
      }()));
      Object.defineProperty(AlbumShow, "annotations", {get: function() {
          return [new Component({
            selector: 'album-show',
            services: [AlbumService]
          }), new View({
            templateUrl: 'components/album/show.html',
            directives: [If, For, ImageUpload, AlbumChromatic]
          })];
        }});
    }
  };
});
