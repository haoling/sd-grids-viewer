import { useContext } from "react"
import { GridSettings } from "./GridSettings"
import { GridHeader } from "./GridHeader"
import { GridRow } from "./GridRow"
import { GridContainer } from "./GridContainer"

export const Grid: React.FC<{}> = () => {
    const gridSettings = useContext(GridSettings.Context)
    let rows: JSX.Element[] = []
    rows.push(<GridHeader key={0} />)
    if (gridSettings.image?.complete) {
        for (let i = 0; i < gridSettings.getRows(); i++) {
            rows.push(<GridRow key={i + 1} rowIndex={i} />)
        }
    }
    return <GridContainer>{rows}</GridContainer>
}