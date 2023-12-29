import { LegendX } from "./LegendX"
import { GridContainerRow } from "./GridContainerRow"
import { GridContainerCol } from "./GridContainerCol"
import { useContext } from "react"
import { GridSettings } from "./GridSettings"

export const GridHeader: React.FC<{}> = () => {
    const gridSettings = useContext(GridSettings.Context)
    let legends: JSX.Element[] = [<GridContainerCol isTitle={true} key={0}><></></GridContainerCol>]
    if (gridSettings.image?.complete) {
        for (let i = 0; i < gridSettings.cols; i++) {
            legends.push(<GridContainerCol key={i + 1}><LegendX colIndex={i} /></GridContainerCol>)
        }
    }
    return <GridContainerRow rowIndex={0} isHeader={true}>{legends}</GridContainerRow>
}