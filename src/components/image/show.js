import {Component, Template} from 'angular2/angular2';

@Component({
    selector: 'image-show'
})

@Template({
    inline: '<img src="{{ url }}" alt="{{ name }}" />'
})

export class ImageShow {
    constructor() {
        console.log('component ImageShow mounted');
    }
}
