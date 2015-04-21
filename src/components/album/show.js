import {Component, View, If, For} from 'angular2/angular2';
import {AlbumService} from 'components/album/service';
import {AlbumChromatic} from 'components/album/chromatic';
import {RouterService} from 'components/router/service';
import {ImageUpload} from 'components/image/upload';

@Component({
    selector: 'album-show',
    services: [AlbumService]
})

@View({
    templateUrl: 'components/album/show.html',
    directives: [If, For, ImageUpload, AlbumChromatic]
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
