import { useContext } from "react"
import { GridCellImage } from "./GridCellImage"
import { CellClickCallbackContext } from "./CellClickCallback"

type Props = {
    rowIndex: number
    colIndex: number
}

export const GridCell: React.FC<Props> = ({ rowIndex, colIndex }) => {
    const cellClickCallback = useContext(CellClickCallbackContext)
    return <div onClick={() => cellClickCallback(rowIndex, colIndex)}><GridCellImage rowIndex={rowIndex} colIndex={colIndex} /></div>
}