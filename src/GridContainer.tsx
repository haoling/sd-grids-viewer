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

export const GridContainer: React.FC<{children:ReactNode}> = ({children}) => {
    const gridSettings = useContext(GridSettings.Context)
    const [sortList, setSortList] = useState<string[]>([])
    const [sortable, setSortable] = useState<Sortable | null>(null)
    const refList = useRef<HTMLUListElement>(null)
    const rowSortContext:GridSortContext = {
        UpCallback: useCallback<GridSortCallback>((rowIndex) => {
            console.log("onRowSortAction")
            const index = sortList.indexOf((rowIndex + 1).toString())
            const front = sortList.slice(0, index)
            const back = sortList.slice(index + 1)
            const pop = front.pop()
            front.push(sortList[index])
            if (pop) {
                back.unshift(pop)
            }
            setSortList(front.concat(back))
        }, [sortList]),
        DownCallback: useCallback<GridSortCallback>((rowIndex) => {
            console.log("onRowSortAction")
            const index = sortList.indexOf((rowIndex + 1).toString())
            const front = sortList.slice(0, index)
            const back = sortList.slice(index + 1)
            const shift = back.shift()
            back.unshift(sortList[index])
            if (shift) {
                front.push(shift)
            }
            setSortList(front.concat(back))
        }, [sortList]),
        isFirst: useCallback<GridTestCallback>((rowIndex) => {
            return sortList.indexOf((rowIndex + 1).toString()) === 1
        }, [sortList]),
        isLast: useCallback<GridTestCallback>((rowIndex) => {
            return sortList.indexOf((rowIndex + 1).toString()) === sortList.length - 1
        }, [sortList]),
    }
    useEffect(() => {
        if (refList.current) {
            setSortable(Sortable.create(refList.current, {
                animation: 150,
                disabled: true,
            }))
            let list = ["0"]
            for (let i = 0; i < gridSettings.rows; i++) {
                list.push((i + 1).toString())
            }
            setSortList(list)
        }
    }, [children])
    useEffect(() => {
        console.log("sortable?.sort(sortList)")
        sortable?.sort(sortList, true)
    }, [sortable, sortList])
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