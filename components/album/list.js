System.register("components/album/list", ["angular2/angular2", "angular2/di", "components/album/service", "components/router/service"], function($__export) {
  "use strict";
  var __moduleName = "components/album/list";
  var Component,
      View,
      For,
      Inject,
      AlbumService,
      RouterService,
      AlbumList;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      For = $__m.For;
    }, function($__m) {
      Inject = $__m.Inject;
    }, function($__m) {
      AlbumService = $__m.AlbumService;
    }, function($__m) {
      RouterService = $__m.RouterService;
    }],
    execute: function() {
      AlbumList = $__export("AlbumList", (function() {
        var AlbumList = function AlbumList() {
          console.log('component AlbumList mounted');
          this.albumService = AlbumService.getInstance();
          this.routerService = RouterService.getInstance();
        };
        return ($traceurRuntime.createClass)(AlbumList, {show: function(item2) {
            this.albumService.select(item2);
            this.routerService.displayAlbumShow();
          }}, {});
      }()));
      Object.defineProperty(AlbumList, "annotations", {get: function() {
          return [new Component({
            selector: 'album-list',
            services: [AlbumService, RouterService]
          }), new View({
            templateUrl: 'components/album/list.html',
            directives: [For]
          })];
        }});
    }
  };
});
