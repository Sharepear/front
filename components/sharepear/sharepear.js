System.register("components/sharepear/sharepear", ["angular2/angular2", "angular2/di", "components/album/show", "components/album/list", "components/album/add", "components/router/service"], function($__export) {
  "use strict";
  var __moduleName = "components/sharepear/sharepear";
  var Component,
      View,
      If,
      Inject,
      AlbumShow,
      AlbumList,
      AlbumAdd,
      RouterService,
      Sharepear;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      If = $__m.If;
    }, function($__m) {
      Inject = $__m.Inject;
    }, function($__m) {
      AlbumShow = $__m.AlbumShow;
    }, function($__m) {
      AlbumList = $__m.AlbumList;
    }, function($__m) {
      AlbumAdd = $__m.AlbumAdd;
    }, function($__m) {
      RouterService = $__m.RouterService;
    }],
    execute: function() {
      Sharepear = $__export("Sharepear", (function() {
        var Sharepear = function Sharepear() {
          this.routerService = RouterService.getInstance();
        };
        return ($traceurRuntime.createClass)(Sharepear, {}, {});
      }()));
      Object.defineProperty(Sharepear, "annotations", {get: function() {
          return [new Component({
            selector: 'sharepear',
            services: [RouterService]
          }), new View({
            templateUrl: 'components/sharepear/sharepear.html',
            directives: [AlbumShow, AlbumList, AlbumAdd, If]
          })];
        }});
    }
  };
});
