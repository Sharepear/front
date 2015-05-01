export class AlbumService
{
    list:Array;
    album;

    static instance:RouterService;
    static isCreating:Boolean = false;

    constructor() {
        if (!AlbumService.isCreating) {
            throw new Error("You can't call new in Singleton instances!");
        }
        this.list = [
            {
                name: 'test',
                images: [
                    { name: "Image1", url: "lorempixel.com/400/200/" },
                    { name: "Image2", url: "lorempixel.com/400/200/" },
                    { name: "Image3", url: "lorempixel.com/400/200/" },
                ]
            }
        ];
    }

    static getInstance() {
        if (AlbumService.instance == null) {
            AlbumService.isCreating = true;
            AlbumService.instance = new AlbumService();
            AlbumService.isCreating = false;
        }

        return AlbumService.instance;
    }

    select(album) {
        console.log('AlbumService select: ' + album.name);
        this.album = album;
    }

    add(name:string) {
        console.log('AlbumService add: ' + name);
        this.list.push({name: name});
    }

    remove(el) {
        var index = this.list.indexOf(el);
        if (index > -1) {
            this.list.splice(index, 1);
            return true;
        }
        return false;
    }

    contains(el) {
        return this.list.indexOf(el) !== -1;
    }
}


//
//
//export class AlbumService {
//    constructor() {
//        this.albums = [
//            {
//                titre: "titre1",
//                photos: [
//                    'http://lorempixel.com/400/200/',
//                    'http://lorempixel.com/400/200/',
//                    'http://lorempixel.com/400/200/',
//                    'http://lorempixel.com/400/200/',
//                    'http://lorempixel.com/400/200/',
//                ]
//            },
//            {
//                titre: "titre2",
//                photos: [
//                    'http://lorempixel.com/200/400/',
//                    'http://lorempixel.com/200/400/',
//                    'http://lorempixel.com/200/400/',
//                    'http://lorempixel.com/200/400/',
//                ]
//            },
//        ];
//    }
//}
