import {Component, View, NgElement} from 'angular2/angular2';

@Component({
    selector: 'album-chromatic',
    lifecycle: ['onDestroy'],
    bind: {
        "gallery": "gallery"
    }
})

@View({
    templateUrl: 'components/album/chromatic.html'
})

export class AlbumChromatic {
    el:NgElement;
    constructor(el: NgElement) {
        console.log('component Chromatic mounted');
        this.el = el;
        //this.gallery = document.getElementsByClassName('album-chromatic');
        new Chromatic.GalleryView(document.getElementsByClassName('album-chromatic'), this.getPhotos());
    }

    onDestroy() {
        console.log('component onDestroy');
        this.el.domElement.querySelector('div').innerHTML = '';
    }

    getPhotos() {
        return [
            {
                "small": "http://img3.chromatic.io/fe766076-f472-e5a5-f173-bded6975ce8a/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/ebe0117b-9351-c1e4-2e51-51c88f4132fb/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/0434dc64-0226-6250-30eb-42b282eefb40/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/a54f0a9c-1dfc-c689-045d-e54f7e645872/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/d8fb8ca6-3b46-d763-9dbf-fd8388402d1d/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/0161d247-b64e-16f5-b4f9-27c33ad6451c/small.jpg",
                "aspect_ratio": 1.5047879616963065
            },
            {
                "small": "http://img3.chromatic.io/cc10fccc-7cf9-04c3-1794-d8ba489d1119/small.jpg",
                "aspect_ratio": 1.5049157303370786
            },
            {
                "small": "http://img3.chromatic.io/3c1618ba-bddb-a51e-4fed-86c549eeb539/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/1192ce85-5675-46f0-ddfc-6c49b5ccbb44/small.jpg",
                "aspect_ratio": 1.5047879616963065
            },
            {
                "small": "http://img3.chromatic.io/cb744883-f13a-bf5b-ab9d-5edeafadccc7/small.jpg",
                "aspect_ratio": 1.5047879616963065
            },
            {
                "small": "http://img3.chromatic.io/fc5fdcc8-64f1-de56-74bc-e0518edeae5f/small.jpg",
                "aspect_ratio": 1.5047879616963065
            },
            {
                "small": "http://img3.chromatic.io/f2044ecb-671b-1cd3-10ca-ff84ff42936e/small.jpg",
                "aspect_ratio": 1.5047879616963065
            },
            {
                "small": "http://img3.chromatic.io/618e41ea-4fcc-90d4-4295-f8ee4d87006e/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/20b47a31-1ded-ec7d-a08d-7cd605189536/small.jpg",
                "aspect_ratio": 1.5047879616963065
            },
            {
                "small": "http://img3.chromatic.io/f30bed2b-1888-6f88-20c4-d3870a2a9d62/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/b25db2e6-c7f8-a5a2-a3da-ab0601458676/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/7a9f09ad-f19b-95e7-9538-bc049810ec5a/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/0a6526f7-477c-44db-1929-7dd28de8c629/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/836fc934-b423-a2b2-26e9-66f6c0aea0a5/small.jpg",
                "aspect_ratio": 1.5047879616963065
            },
            {
                "small": "http://img3.chromatic.io/d7088a6f-4691-a502-4e37-43177ed6e293/small.jpg",
                "aspect_ratio": 0.664813343923749
            },
            {
                "small": "http://img3.chromatic.io/92f6bfdf-8308-bd67-ffbc-37ab19a7e345/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/ca43eb5a-0cbf-2705-7d01-0432e55b0c6c/small.jpg",
                "aspect_ratio": 1.5040797824116048
            },
            {
                "small": "http://img3.chromatic.io/73511c34-65b8-250e-4460-2f04dbe7c8a8/small.jpg",
                "aspect_ratio": 1.5047879616963065
            },
            {
                "small": "http://img3.chromatic.io/c3c03142-6a4e-e127-3709-62a981a1d1c4/small.jpg",
                "aspect_ratio": 0.6645454545454546
            },
            {
                "small": "http://img3.chromatic.io/22e58b3e-0150-593c-4c20-f069b5e04fff/small.jpg",
                "aspect_ratio": 1.5058179329226558
            },
            {
                "small": "http://img3.chromatic.io/2fbd62df-4081-6102-8126-3e52736951f1/small.jpg",
                "aspect_ratio": 1.5047879616963065
            },
            {
                "small": "http://img3.chromatic.io/6c969b53-95c0-d2ee-5e1b-d8a93f6f7fb6/small.jpg",
                "aspect_ratio": 1.5047879616963065
            }
        ];
    }
}