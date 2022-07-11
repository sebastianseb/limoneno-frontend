export class DatasetItemTag {
    public type: string;
    public label: string;
    public start: number;
    public end: number;
    public text: string;

    constructor(result: any = null) {
        this.type = result ? result.type : null;
        this.label = result ? result.label : null;
        this.start = result ? result.start : null;
        this.end = result ? result.end : null;
        this.text = result ? result.text : null;
    }
}