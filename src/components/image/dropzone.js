export class MyDropzone
{
    dropzone;
    addedfile = 0;
    process = 0;
    success = 0;
    queueComplete = true;

    static instance:MyDropzone;
    static isCreating:Boolean = false;

    constructor() {
        if (!MyDropzone.isCreating) {
            throw new Error("You can't call new in Singleton instances!");
        }
    }

    static getInstance() {
        if (MyDropzone.instance == null) {
            MyDropzone.isCreating = true;
            MyDropzone.instance = new MyDropzone();
            MyDropzone.isCreating = false;
        }

        return MyDropzone.instance;
    }

    load() {
        var that = this;
        if (!this.dropzone) {
            console.log("load");
            Dropzone.autoDiscover = false;
            this.dropzone = new Dropzone(".dropzone", { url: "http://127.0.0.1:8080/upload"});
            this.dropzone.options.createImageThumbnails = false;
            this.dropzone.options.previewTemplate = "<div></div>";

            this.dropzone.on("addedfile", function(file) {
                if (that.queueComplete) {
                    that.success = 0;
                    that.addedfile = 0;
                    that.queueComplete = false;
                }
                that.addedfile++;
                that.process++;
            });
            this.dropzone.on("success", function(file) {
                that.process--;
                that.success++;
                console.log(file.name);
            });
            this.dropzone.on("queuecomplete", function(file) {
                that.queueComplete = true;
                that.process = 0;
            });
        }
    }
}
