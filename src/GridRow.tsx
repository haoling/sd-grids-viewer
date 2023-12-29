import { useContext } from "react"
import { GridContainerRow } from "./GridContainerRow"
import { GridContainerCol } from "./GridContainerCol"
import { LegendY } from "./LegendY"
import { GridCell } from "./GridCell"
import { GridSettingsContainerContext } from "./GridSettingsContainer"

type Props = {
    rowIndex: number
}

export const GridRow: React.FC<Props> = ({rowIndex}) => {
    const {gridSettings} = useContext(GridSettingsContainerContext)
    let canvases: JSX.Element[] = [<GridContainerCol key={0} isTitle={true}><LegendY rowIndex={rowIndex} /></GridContainerCol>]
    if (gridSettings.image?.complete) {
        for (let i = 0; i < gridSettings.cols; i++) {
            canvases.push(<GridContainerCol key={i + 1}><GridCell rowIndex={rowIndex} colIndex={i} /></GridContainerCol>)
        }
    }
    return <GridContainerRow rowIndex={rowIndex}>{canvases}</GridContainerRow>
}