export class GridCellSettings {
    readonly width: number = 384;
    readonly height: number = 512;
    constructor(parent:GridSettings, init?: Partial<GridCellSettings>) {
        Object.assign(this, init);

        if (parent.image && ! init?.height) {
            if ((parent.image.naturalHeight - parent.header.height) % 768 == 0) {
                this.height = 768;
            } else if ((parent.image.naturalHeight - parent.header.height) % 512 == 0) {
                this.height = 512;
            }
        }
    }
}
export class GridHeaderSettings {
    readonly width: number = 384;
    readonly height: number = 256;
    constructor(init?: Partial<GridHeaderSettings>) {
        Object.assign(this, init);
    }
}
export class GridSettings {
    readonly cell: GridCellSettings;
    readonly header: GridHeaderSettings;
    readonly cols: number = 0;
    readonly rows: number = 0;
    readonly image?: HTMLImageElement;
    readonly rowsOrder?: number[];

    constructor(init: Partial<GridSettings>) {
        Object.assign(this, init);
        this.header = new GridHeaderSettings(init?.header);
        this.cell = new GridCellSettings(this, init?.cell);

        if (this.image) {
            if (this.header.width + (this.cell.width * this.cols) != this.image.naturalWidth || this.header.height + (this.cell.height * this.rows) != this.image.naturalHeight) {
                this.cols = Math.floor(this.image.naturalWidth / this.cell.width)
                this.rows = Math.floor(this.image.naturalHeight / this.cell.height)
                let headerWidth = this.image.naturalWidth - (this.cell.width * this.cols)
                let headerHheight = this.image.naturalHeight - (this.cell.height * this.rows)
                this.header = new GridHeaderSettings({ width: headerWidth, height: headerHheight });
            } else {
                this.cols = Math.floor((this.image.naturalWidth - this.header.width) / this.cell.width)
                this.rows = Math.floor((this.image.naturalHeight - this.header.height) / this.cell.height)
            }
        }
    }

    toJSON() {
        const {
            image,
            ...remaining
        } = this;
        return {
            ...remaining,
        };
    }
}
