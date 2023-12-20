import { useContext } from "react"
import { ImageDrawCanvas } from "./ImageDrawCanvas"
import { GridSettings } from "./GridSettings"

type Props = {
    rowIndex: number
    colIndex: number
}

export const GridCellImage: React.FC<Props> = ({ rowIndex: r, colIndex: c }) => {
    const gridSettings = useContext(GridSettings.Context)
    if (gridSettings.image?.complete) {
        return <ImageDrawCanvas
            image={gridSettings.image}
            sx={gridSettings.header.width + (c * gridSettings.cell.width)}
            sy={gridSettings.header.height + (r * gridSettings.cell.height)}
            sw={gridSettings.cell.width}
            sh={gridSettings.cell.height}
        />
    } else {
        return <></>
    }
}