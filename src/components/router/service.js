export class RouterService
{
    albumShow:boolean;
    albumList:boolean;

    static instance:RouterService;
    static isCreating:Boolean = false;

    constructor() {
        if (!RouterService.isCreating) {
            throw new Error("You can't call new in Singleton instances!");
        }
        this.albumShow = false;
        this.albumList = true;
    }

    static getInstance() {
        if (RouterService.instance == null) {
            RouterService.isCreating = true;
            RouterService.instance = new RouterService();
            RouterService.isCreating = false;
        }

        return RouterService.instance;
    }

    displayAlbumShow() {
        this.albumList = false;
        this.albumShow = true;
    }

    displayAlbumList() {
        this.albumShow = false;
        this.albumList = true;
    }
}
