System.register("components/router/service", [], function($__export) {
  "use strict";
  var __moduleName = "components/router/service";
  var RouterService;
  return {
    setters: [],
    execute: function() {
      RouterService = $__export("RouterService", (function() {
        var RouterService = function RouterService() {
          if (!RouterService.isCreating) {
            throw new Error("You can't call new in Singleton instances!");
          }
          this.albumShow = false;
          this.albumList = true;
        };
        return ($traceurRuntime.createClass)(RouterService, {
          displayAlbumShow: function() {
            this.albumList = false;
            this.albumShow = true;
          },
          displayAlbumList: function() {
            this.albumShow = false;
            this.albumList = true;
          }
        }, {
          getInstance: function() {
            if (RouterService.instance == null) {
              RouterService.isCreating = true;
              RouterService.instance = new RouterService();
              RouterService.isCreating = false;
            }
            return RouterService.instance;
          },
          isCreating: false
        });
      }()));
    }
  };
});
