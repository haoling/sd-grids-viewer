import { useContext } from "react"
import { ImageDrawCanvas } from "./ImageDrawCanvas"
import { GridSettings } from "./GridSettings"
import useDeferredState from "use-deferred-state"

type Props = {
    colIndex: number
}

export const LegendX: React.FC<Props> = ({ colIndex: i }) => {
    const gridSettingsOriginal = useContext(GridSettings.Context)
    const gridSettings = useDeferredState(gridSettingsOriginal, [], 500)
    if (gridSettings.image?.complete) {
        return <ImageDrawCanvas
            image={gridSettings.image}
            sx={gridSettings.header.width + (i * gridSettings.cell.width)}
            sy={0}
            sw={gridSettings.cell.width}
            sh={gridSettings.header.height}
        />
    } else {
        return <></>
    }
}