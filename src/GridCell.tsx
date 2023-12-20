import { GridCellImage } from "./GridCellImage"

type Props = {
    rowIndex: number
    colIndex: number
}

export const GridCell: React.FC<Props> = ({ rowIndex, colIndex }) => {
    return <div onClick={console.log}><GridCellImage rowIndex={rowIndex} colIndex={colIndex} /></div>
}