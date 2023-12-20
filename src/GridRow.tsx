import { useContext } from "react"
import { GridSettings } from "./GridSettings"
import { ImageDrawCanvas } from "./ImageDrawCanvas"
import { GridContainerRow } from "./GridContainerRow"
import { GridContainerCol } from "./GridContainerCol"
import { LegendY } from "./LegendY"

type Props = {
    rowIndex: number
}

export const GridRow: React.FC<Props> = ({rowIndex}) => {
    const gridSettings = useContext(GridSettings.Context)
    let canvases: JSX.Element[] = [<GridContainerCol key={0} isTitle={true}><LegendY rowIndex={rowIndex} /></GridContainerCol>]
    if (gridSettings.image?.complete) {
        for (let i = 0; i < gridSettings.getCols(); i++) {
            const canvas = <ImageDrawCanvas
                image={gridSettings.image}
                sx={gridSettings.header.width + (i * gridSettings.cell.width)}
                sy={gridSettings.header.height + (rowIndex * gridSettings.cell.height)}
                sw={gridSettings.cell.width}
                sh={gridSettings.cell.height}
            />
            canvases.push(<GridContainerCol key={i + 1}>{canvas}</GridContainerCol>)
        }
    }
    return <GridContainerRow>{canvases}</GridContainerRow>
}