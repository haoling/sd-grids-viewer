import { ReactNode, useContext } from "react"
import { GridSettings } from "./GridSettings"

type Props = {
    children: ReactNode
    isTitle?: boolean
}

export const GridContainerCol: React.FC<Props> = ({children, isTitle}) => {
    const gridSettings = useContext(GridSettings.Context)
    const width = isTitle ? gridSettings.header.width : gridSettings.cell.width
    return <div className={"col p-0 border"} style={{width: width, minWidth: width}}>{children}</div>
}