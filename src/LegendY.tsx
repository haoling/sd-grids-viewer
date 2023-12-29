import { useContext } from "react"
import { ImageDrawCanvas } from "./ImageDrawCanvas"
import { GridSettings } from "./GridSettings"
import useDeferredState from "use-deferred-state"
import { GridContainerRowSortDownButton, GridContainerRowSortUpButton } from "./GridContainer"

type Props = {
    rowIndex: number
}

export const LegendY: React.FC<Props> = ({ rowIndex: i }) => {
    const gridSettingsOriginal = useContext(GridSettings.Context)
    const gridSettings = useDeferredState(gridSettingsOriginal, [], 500)
    if (gridSettings.image?.complete) {
        return <div className="position-relative">
            <ImageDrawCanvas
                image={gridSettings.image}
                sx={0}
                sy={gridSettings.header.height + (i * gridSettings.cell.height)}
                sw={gridSettings.header.width}
                sh={gridSettings.cell.height}
            />
            <GridContainerRowSortUpButton rowIndex={i} />
            <GridContainerRowSortDownButton rowIndex={i} />
        </div>
    } else {
        return <></>
    }
}