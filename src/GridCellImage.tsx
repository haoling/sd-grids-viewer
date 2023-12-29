import { useContext } from "react"
import { ImageDrawCanvas } from "./ImageDrawCanvas"
import useDeferredState from "use-deferred-state"
import { GridSettingsContainerContext } from "./GridSettingsContainer"

type Props = {
    rowIndex: number
    colIndex: number
}

export const GridCellImage: React.FC<Props> = ({ rowIndex: r, colIndex: c }) => {
    const gridSettingsOriginal = useContext(GridSettingsContainerContext).gridSettings
    const gridSettings = useDeferredState(gridSettingsOriginal, [], 500)
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