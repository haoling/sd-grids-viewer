import { ReactNode, createContext, useCallback, useContext, useEffect, useRef, useState } from "react"
import Sortable from "sortablejs"
import { GridSettings } from "./GridSettings";

type GridSortCallback = (rowIndex: number) => void;
type GridTestCallback = (rowIndex: number) => boolean;
type GridSortContext = {
    UpCallback: GridSortCallback,
    DownCallback: GridSortCallback,
    isFirst: GridTestCallback,
    isLast: GridTestCallback,
}
const GridSortContext: React.Context<GridSortContext> = createContext<GridSortContext>({
    UpCallback: () => {},
    DownCallback: () => {},
    isFirst: () => false,
    isLast: () => false,
})

type Props = {
    children:ReactNode
    rowSortList: number[]
    setRowSortList: (sortList: number[]) => void
}

export const GridContainer: React.FC<Props> = ({children, rowSortList, setRowSortList}) => {
    const gridSettings = useContext(GridSettings.Context)
    const [sortable, setSortable] = useState<Sortable | null>(null)
    const refList = useRef<HTMLUListElement>(null)
    const rowSortContext:GridSortContext = {
        UpCallback: useCallback<GridSortCallback>((rowIndex) => {
            console.log("onRowSortAction")
            const index = rowSortList.indexOf(rowIndex + 1)
            const front = rowSortList.slice(0, index)
            const back = rowSortList.slice(index + 1)
            const pop = front.pop()
            front.push(rowSortList[index])
            if (pop) {
                back.unshift(pop)
            }
            setRowSortList(front.concat(back))
        }, [rowSortList]),
        DownCallback: useCallback<GridSortCallback>((rowIndex) => {
            console.log("onRowSortAction")
            const index = rowSortList.indexOf(rowIndex + 1)
            const front = rowSortList.slice(0, index)
            const back = rowSortList.slice(index + 1)
            const shift = back.shift()
            back.unshift(rowSortList[index])
            if (shift) {
                front.push(shift)
            }
            setRowSortList(front.concat(back))
        }, [rowSortList]),
        isFirst: useCallback<GridTestCallback>((rowIndex) => {
            return rowSortList.indexOf(rowIndex + 1) === 1
        }, [rowSortList]),
        isLast: useCallback<GridTestCallback>((rowIndex) => {
            return rowSortList.indexOf(rowIndex + 1) === rowSortList.length - 1
        }, [rowSortList]),
    }
    useEffect(() => {
        if (refList.current) {
            setSortable(Sortable.create(refList.current, {
                animation: 150,
                disabled: true,
            }))
            let list = [0]
            for (let i = 0; i < gridSettings.rows; i++) {
                list.push(i + 1)
            }
            setRowSortList(list)
        }
    }, [gridSettings.rows])
    useEffect(() => {
        console.log("sortable?.sort(sortList)")
        sortable?.sort(rowSortList.map(v => v.toString()), true)
    }, [sortable, rowSortList])
    return <GridSortContext.Provider value={rowSortContext}>
        <ul className="container" style={{zoom:0.5}} ref={refList}>{children}</ul>
    </GridSortContext.Provider>
}

export const GridContainerRowSortUpButton: React.FC<{rowIndex: number}> = ({rowIndex}) => {
    const rowSortContext = useContext(GridSortContext)
    if (rowSortContext.isFirst(rowIndex)) {
        return <></>
    }
    return <div className="btn btn-primary position-absolute top-0 left-0 my-2" onClick={() => rowSortContext.UpCallback(rowIndex)}>
        <i className="bi bi-caret-up-fill"></i>
    </div>
}

export const GridContainerRowSortDownButton: React.FC<{rowIndex: number}> = ({rowIndex}) => {
    const rowSortContext = useContext(GridSortContext)
    if (rowSortContext.isLast(rowIndex)) {
        return <></>
    }
    return <div className="btn btn-primary position-absolute bottom-0 left-0 my-2" onClick={() => rowSortContext.DownCallback(rowIndex)}>
        <i className="bi bi-caret-down-fill"></i>
    </div>
}