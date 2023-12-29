import { ReactNode, useContext } from "react"
import { GridSettingsContainerContext } from "./GridSettingsContainer"

type Props = {
    children: ReactNode
    rowIndex: number
    isHeader?: boolean
}

export const GridContainerRow: React.FC<Props> = ({children, rowIndex, isHeader}) => {
    const {gridSettings} = useContext(GridSettingsContainerContext)
    return <li className="row flex-nowrap" data-id={rowIndex + (isHeader ? 0 : 1)} style={{height: isHeader ? gridSettings.header.height + 2 : gridSettings.cell.height + 2}}>{children}</li>
}
