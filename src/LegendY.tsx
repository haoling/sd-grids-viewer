import { ReactEventHandler, useCallback, useContext } from "react"
import { ImageDrawCanvas } from "./ImageDrawCanvas"
import useDeferredState from "use-deferred-state"
import { GridSettingsContainerContext } from "./GridSettingsContainer"

type Props = {
    rowIndex: number
}

export const LegendY: React.FC<Props> = ({ rowIndex: i }) => {
    const gridSettingsOriginal = useContext(GridSettingsContainerContext).gridSettings
    const gridSettings = useDeferredState(gridSettingsOriginal, [], 500)
    if (gridSettings.image?.complete) {
        return <div className="position-relative">
            <ImageDrawCanvas
                image={gridSettings.image}
                sx={0}
                sy={gridSettings.header.height + (i * gridSettings.cell.height)}
                sw={gridSettings.header.width}
                sh={gridSettings.cell.height}
            />
            <GridContainerRowSortUpButton rowIndex={i} />
            <GridContainerRowSortDownButton rowIndex={i} />
            <GridContainerRowSortRemoveButton rowIndex={i} />
        </div>
    } else {
        return <></>
    }
}

const GridContainerRowSortUpButton: React.FC<{ rowIndex: number }> = ({ rowIndex }) => {
    const { rowSortList, setRowSortList } = useContext(GridSettingsContainerContext)
    const callback = useCallback<ReactEventHandler<HTMLDivElement>>(() => {
        const index = rowSortList.indexOf(rowIndex)
        const front = rowSortList.slice(0, index)
        const back = rowSortList.slice(index + 1)
        const pop = front.pop()
        front.push(rowSortList[index])
        if (pop !== undefined) {
            back.unshift(pop)
        }
        setRowSortList(front.concat(back))
    }, [rowIndex, rowSortList])

    if (rowSortList.indexOf(rowIndex) === 0) {
        return <></>
    }

    return <div className="btn btn-primary position-absolute top-0 start-0 my-2" onClick={callback}>
        <i className="bi bi-caret-up-fill"></i>
    </div>
}

const GridContainerRowSortDownButton: React.FC<{ rowIndex: number }> = ({ rowIndex }) => {
    const { rowSortList, setRowSortList } = useContext(GridSettingsContainerContext)
    const callback = useCallback<ReactEventHandler<HTMLDivElement>>(() => {
        const index = rowSortList.indexOf(rowIndex)
        const front = rowSortList.slice(0, index)
        const back = rowSortList.slice(index + 1)
        const shift = back.shift()
        back.unshift(rowSortList[index])
        if (shift !== undefined) {
            front.push(shift)
        }
        setRowSortList(front.concat(back))
    }, [rowIndex, rowSortList])
    if (rowSortList.indexOf(rowIndex) === rowSortList.length - 1) {
        return <></>
    }

    return <div className="btn btn-primary position-absolute bottom-0 start-0 my-2" onClick={callback}>
        <i className="bi bi-caret-down-fill"></i>
    </div>
}

const GridContainerRowSortRemoveButton: React.FC<{ rowIndex: number }> = ({ rowIndex }) => {
    const { rowSortList, setRowSortList } = useContext(GridSettingsContainerContext)
    const callback = useCallback<ReactEventHandler<HTMLDivElement>>(() => {
        const index = rowSortList.indexOf(rowIndex)
        const front = rowSortList.slice(0, index)
        const back = rowSortList.slice(index + 1)
        setRowSortList(front.concat(back))
    }, [rowIndex, rowSortList])
    if (rowSortList.length == 1) {
        return <></>
    }

    return <div className="btn btn-danger position-absolute top-0 end-0 my-2" onClick={callback}>
        <i className="bi bi-x-lg"></i>
    </div>
}