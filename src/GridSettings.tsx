import { RefObject } from "react";

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
    readonly cell: CellSettings;
    readonly header: HeaderSettings;
    readonly cols?: number;
    protected image: RefObject<HTMLImageElement> | null = null;

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

    setImage(image: RefObject<HTMLImageElement>) {
        this.image = image;
    }

    getCols(): number {
        if (this.cols && this.cols > 0) {
            return this.cols;
        }
        if (this.image?.current) {
            return Math.floor(this.image.current.naturalWidth / this.cell.width);
        }
        return 0;
    }
}