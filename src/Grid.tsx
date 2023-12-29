import { useContext } from "react"
import { GridHeader } from "./GridHeader"
import { GridRow } from "./GridRow"
import { GridContainer } from "./GridContainer"
import { GridSettingsContainerContext } from "./GridSettingsContainer"

export const Grid: React.FC<{}> = () => {
    const {gridSettings} = useContext(GridSettingsContainerContext)
    let rows: JSX.Element[] = []
    rows.push(<GridHeader key={0} />)
    if (gridSettings.image?.complete) {
        for (let i = 0; i < gridSettings.rows; i++) {
            rows.push(<GridRow key={i + 1} rowIndex={i} />)
        }
    }
    return <GridContainer>{rows}</GridContainer>
}