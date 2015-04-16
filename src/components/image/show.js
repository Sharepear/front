import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'image-show'
})

@View({
    template: '<img src="{{ url }}" alt="{{ name }}" />'
})

export class ImageShow {
    constructor() {
        console.log('component ImageShow mounted');
    }
}
