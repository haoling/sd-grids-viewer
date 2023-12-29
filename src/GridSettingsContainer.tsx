import { ReactEventHandler, ReactNode, createContext, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react"
import { GridSettings } from "./GridSettings"
import { GridSettingsPanel, GridSettingsPanelType } from "./GridSettingsPanel"

export type GridSettingsContainerType = {
    onImageLoaded: ReactEventHandler<HTMLImageElement>
}

type Props = {
    children: ReactNode
}

export const GridSettingsContainer = forwardRef<GridSettingsContainerType, Props>(({children}, ref) => {
    const gridSettingsPanelRef = useRef<GridSettingsPanelType>(null);
    const [gridSettings, setGridSettings] = useState<GridSettings>(new GridSettings({ ...window.gridSettings, rowsOrder: undefined }));

    useEffect(() => {
        if (gridSettings.rows > 0 && !gridSettings.rowsOrder?.length) {
            let list = []
            for (let i = 0; i < gridSettings.rows; i++) {
                list.push(i)
            }
            setRowSortList(list, false)
        }
    }, [gridSettings])

    const setRowSortList = useCallback((rowSortList: number[], isDirty: boolean = true) => {
        console.log("Set rowSortList", rowSortList);
        setGridSettings(new GridSettings({ ...gridSettings, rowsOrder: rowSortList }));
        isDirty && gridSettingsPanelRef.current?.setDirty();
    }, [gridSettings])

    const onImageLoaded = useCallback<ReactEventHandler<HTMLImageElement>>((event) => {
        setGridSettings(new GridSettings({ ...gridSettings, image: event.currentTarget, rowsOrder: window.gridSettings.rowsOrder }));
        console.log("Image loaded");
    }, [gridSettings])
    useImperativeHandle(ref, () => ({onImageLoaded}), [])

    return <>
        <GridSettingsContainerContext.Provider value={{ gridSettings, rowSortList: gridSettings.rowsOrder ?? [], setRowSortList }}>
            {children}
        </GridSettingsContainerContext.Provider>
        <div className="container pe-none position-absolute top-0 left-0">
            <GridSettingsPanel gridSettings={gridSettings} setGridSettings={setGridSettings} ref={gridSettingsPanelRef} />
        </div>
    </>
})

type GridSettingsContainerContextType = {
    gridSettings: GridSettings
    rowSortList: number[]
    setRowSortList: (rowSortList: number[]) => void
}
export const GridSettingsContainerContext = createContext<GridSettingsContainerContextType>({
    gridSettings: new GridSettings({}),
    rowSortList: [],
    setRowSortList: () => { },
});