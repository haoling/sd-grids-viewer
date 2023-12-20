import { createContext } from "react";

export class CellSettings {
    readonly width: number = 512;
    readonly height: number = 512;
    constructor(init?: Partial<CellSettings>) {
        Object.assign(this, init);
    }
}
export class HeaderSettings {
    readonly width: number = 384;
    readonly height: number = 127;
    constructor(init?: Partial<HeaderSettings>) {
        Object.assign(this, init);
    }
}
export class GridSettings {
    static Context: React.Context<GridSettings> = createContext<GridSettings>(new GridSettings({}));

    readonly cell: CellSettings;
    readonly header: HeaderSettings;
    readonly cols?: number;
    readonly rows?: number;
    readonly image?: HTMLImageElement;

    constructor(init: Partial<GridSettings>) {
        Object.assign(this, init);
        this.cell = new CellSettings(init?.cell);
        this.header = new HeaderSettings(init?.header);
    }

    toJSON() {
        const {
            image,
            ...remaining
        } = this;
        return {
            ...remaining,
            cols: this.getCols(),
        };
    }

    getCols(): number {
        if (this.cols && this.cols > 0) {
            return this.cols;
        }
        if (this.image) {
            return Math.floor((this.image.naturalWidth - this.header.width) / this.cell.width);
        }
        return 0;
    }

    getRows(): number {
        if (this.rows && this.rows > 0) {
            return this.rows;
        }
        if (this.image) {
            return Math.floor((this.image.naturalHeight - this.header.height) / this.cell.height);
        }
        return 0;
    }
}
