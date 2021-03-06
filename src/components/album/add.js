import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {AlbumService} from 'components/album/service';

@Component({
    selector: 'album-add',
    services: [AlbumService]
})

@View({
    templateUrl: 'components/album/add.html'
})

export class AlbumAdd {
    albumService:AlbumService;

    constructor() {
        console.log('component AlbumAdd mounted');
        this.albumService = AlbumService.getInstance();
    }
}
