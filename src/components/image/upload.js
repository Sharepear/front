import {Component, Template} from 'angular2/angular2';
import {MyDropzone} from 'components/image/dropzone';

@Component({
    selector: 'image-upload',
    services: [MyDropzone]
})

@Template({
    url: 'components/image/upload.html'
})

export class ImageUpload {
    myDropzone:MyDropzone;

    constructor() {
        console.log('component ImageUpload mounted');
        this.myDropzone = MyDropzone.getInstance();
        this.myDropzone.load();
    }
}
