import {Component, Template, For} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {AlbumService} from 'components/album/service';
import {RouterService} from 'components/router/service';

@Component({
    selector: 'album-list',
    services: [AlbumService, RouterService]
})

@Template({
    url: 'components/album/list.html',
    directives: [For]
})

export class AlbumList {
    albumService:AlbumService;
    routerService:RouterService;

    constructor() {
        console.log('component AlbumList mounted');
        this.albumService = AlbumService.getInstance();
        this.routerService = RouterService.getInstance();
    }

    show(item2) {
        this.albumService.select(item2);
        this.routerService.displayAlbumShow();
    }
}
