import { createContext } from "react";

export class CellSettings {
    readonly width: number = 512;
    readonly height: number = 512;
    constructor(parent:GridSettings, init?: Partial<CellSettings>) {
        Object.assign(this, init);

        if (parent.image && ! init?.height) {
            if ((parent.image.naturalHeight - parent.header.height) % 512 == 0) {
                this.height = 512;
            } else if ((parent.image.naturalHeight - parent.header.height) % 768 == 0) {
                this.height = 768;
            }
        }
    }
}
export class HeaderSettings {
    readonly width: number = 384;
    readonly height: number = 256;
    constructor(init?: Partial<HeaderSettings>) {
        Object.assign(this, init);
    }
}
export class GridSettings {
    static Context: React.Context<GridSettings> = createContext<GridSettings>(new GridSettings({}));

    readonly cell: CellSettings;
    readonly header: HeaderSettings;
    readonly cols: number = 0;
    readonly rows: number = 0;
    readonly image?: HTMLImageElement;

    constructor(init: Partial<GridSettings>) {
        Object.assign(this, init);
        this.header = new HeaderSettings(init?.header);
        this.cell = new CellSettings(this, init?.cell);

        if (this.image) {
            this.cols = Math.floor((this.image.naturalWidth - this.header.width) / this.cell.width)
            this.rows = Math.floor((this.image.naturalHeight - this.header.height) / this.cell.height)
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
