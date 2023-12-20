import { ReactNode, useContext } from "react"
import { GridSettings } from "./GridSettings"

type Props = {
    children: ReactNode
    isHeader?: boolean
}

export const GridContainerRow: React.FC<Props> = ({children, isHeader}) => {
    const gridSettings = useContext(GridSettings.Context)
    return <div className="row flex-nowrap" style={{height: isHeader ? gridSettings.header.height : gridSettings.cell.height}}>{children}</div>
}