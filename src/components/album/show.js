import {Component, Template, If, For} from 'angular2/angular2';
import {AlbumService} from 'components/album/service';
import {RouterService} from 'components/router/service';

@Component({
    selector: 'album-show',
    services: [AlbumService]
})

@Template({
    url: 'components/album/show.html',
    directives: [If, For]
})

export class AlbumShow {
    albumService:AlbumService;
    routerService:RouterService;

    constructor() {
        console.log('component AlbumShow mounted');
        this.albumService = AlbumService.getInstance();
        this.routerService = RouterService.getInstance();
    }

    remove() {
        this.routerService.displayAlbumList();
        this.albumService.remove(this.albumService.album)
    }
}
