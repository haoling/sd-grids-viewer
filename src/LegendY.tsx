import { useContext } from "react"
import { ImageDrawCanvas } from "./ImageDrawCanvas"
import { GridSettings } from "./GridSettings"

type Props = {
    rowIndex: number
}

export const LegendY: React.FC<Props> = ({ rowIndex: i }) => {
    const gridSettings = useContext(GridSettings.Context)
    if (gridSettings.image?.complete) {
        return <ImageDrawCanvas
            image={gridSettings.image}
            sx={0}
            sy={gridSettings.header.height + (i * gridSettings.cell.height)}
            sw={gridSettings.header.width}
            sh={gridSettings.cell.height}
        />
    } else {
        return <></>
    }
}