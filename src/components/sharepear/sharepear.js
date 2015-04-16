import {Component, View, If} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {AlbumShow} from 'components/album/show';
import {AlbumList} from 'components/album/list';
import {AlbumAdd} from 'components/album/add';
import {RouterService} from 'components/router/service';

@Component({
    selector: 'sharepear',
    services: [RouterService]
})

@View({
    templateUrl: 'components/sharepear/sharepear.html',
    directives: [AlbumShow, AlbumList, AlbumAdd, If]
})

export class Sharepear {
    routerService:RouterService;

    constructor() {
        this.routerService = RouterService.getInstance();
    }
}
