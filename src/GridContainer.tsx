import { ReactNode, useContext, useEffect, useRef, useState } from "react"
import Sortable from "sortablejs"
import { GridSettingsContainerContext } from "./GridSettingsContainer";

export const GridContainer: React.FC<{children:ReactNode}> = ({children}) => {
    const {gridSettings, rowSortList} = useContext(GridSettingsContainerContext)
    const [sortable, setSortable] = useState<Sortable | null>(null)
    const refList = useRef<HTMLUListElement>(null)
    useEffect(() => {
        if (refList.current) {
            setSortable(Sortable.create(refList.current, {
                animation: 150,
                disabled: true,
            }))
        }
    }, [gridSettings.rows])
    useEffect(() => {
        const sortList = ["0"].concat(rowSortList.map(v => (v + 1).toString()))
        sortable?.sort(sortList, true)
    }, [sortable, rowSortList])
    return <ul className="container" style={{zoom:0.5}} ref={refList}>{children}</ul>
}
