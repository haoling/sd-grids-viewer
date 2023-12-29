import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from "react"
import { GridCellSettings, GridHeaderSettings, GridSettings } from "./GridSettings"
import { Toast } from "bootstrap"

const NumberInput: React.FC<{ value: number, onChange: (value: number) => void, step?: number }> = ({ value, onChange, step = 1 }) => {
    return <input type="number" className="pe-auto" style={{ width: "3rem" }} step={step} value={value} onChange={(event) => onChange(parseInt(event.target.value))} />
}

const GridHeaderSettingsPanel: React.FC<{ headerSettings: GridHeaderSettings, onChange: (headerSettings: GridHeaderSettings) => void }> = ({ headerSettings, onChange }) => {
    return <>&#x7b;
        <div>&nbsp;&nbsp;&nbsp;&nbsp;"width": <NumberInput value={headerSettings.width} onChange={(v) => onChange({ ...headerSettings, width: v })} step={8} />,</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;"height": <NumberInput value={headerSettings.height} onChange={(v) => onChange({ ...headerSettings, height: v })} /></div>
        &#x7d;</>
}

const GridCellSettingsPanel: React.FC<{ cellSettings: GridCellSettings, onChange: (cellSettings: GridCellSettings) => void }> = ({ cellSettings, onChange }) => {
    return <>&#x7b;
        <div>&nbsp;&nbsp;&nbsp;&nbsp;"width": <NumberInput value={cellSettings.width} onChange={(v) => onChange({ ...cellSettings, width: v })} step={8} />,</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;"height": <NumberInput value={cellSettings.height} onChange={(v) => onChange({ ...cellSettings, height: v })} step={8} /></div>
        &#x7d;</>
}

type Props = {
    gridSettings: GridSettings
    setGridSettings: (gridSettings: GridSettings) => void
    setDirtyRef?: MutableRefObject<() => void>
}

export const GridSettingsPanel: React.FC<Props> = ({ gridSettings, setGridSettings, setDirtyRef }) => {
    const refToast = useRef<HTMLDivElement>(null)
    let errorMessage: ReactNode[] = []
    const [dirty, setDirty] = useState(false)
    if (gridSettings.image) {
        if (gridSettings.header.width + (gridSettings.cell.width * gridSettings.cols) != gridSettings.image.naturalWidth) {
            errorMessage.push(<div key="wrong-width">header.width + (cell.width * cols) != image.naturalWidth</div>)
        }
        if (gridSettings.header.height + (gridSettings.cell.height * gridSettings.rows) != gridSettings.image.naturalHeight) {
            errorMessage.push(<div key="wrong-height">header.height + (cell.height * rows) != image.naturalHeight</div>)
        }
    }
    useEffect(() => {
        if (setDirtyRef) {
            setDirtyRef.current = () => setDirty(true)
        }
    }, [setDirtyRef, setDirty])
    const changeSettings = useCallback((changes: Partial<GridSettings>) => {
        let newSettings = { ...gridSettings, ...changes }
        if (gridSettings.image) {
            let imageWidth = gridSettings.image.naturalWidth
            let headerWidth = newSettings.header.width
            let cellWidth = newSettings.cell.width

            if (changes.cols !== undefined) {
                cellWidth = Math.floor((imageWidth - headerWidth) / newSettings.cols)
                cellWidth -= cellWidth % 8
                headerWidth -= (headerWidth + (cellWidth * newSettings.cols)) - imageWidth
            }
            if (changes.cell !== undefined) {
                cellWidth -= cellWidth % 8
                newSettings.cols = Math.floor(imageWidth / cellWidth)
                headerWidth = imageWidth - (cellWidth * newSettings.cols)
            }

            let imageHeight = gridSettings.image.naturalHeight
            let headerHeight = newSettings.header.height
            let cellHeight = newSettings.cell.height

            if (changes.rows !== undefined) {
                cellHeight = Math.floor((imageHeight - headerHeight) / newSettings.rows)
                cellHeight -= cellHeight % 8
                headerHeight -= (headerHeight + (cellHeight * newSettings.rows)) - imageHeight
            }
            if (changes.cell !== undefined) {
                cellHeight -= cellHeight % 8
                newSettings.rows = Math.floor(imageHeight / cellHeight)
                headerHeight = imageHeight - (cellHeight * newSettings.rows)
            }

            newSettings.header = { ...newSettings.header, width: headerWidth, height: headerHeight }
            newSettings.cell = { ...newSettings.cell, width: cellWidth, height: cellHeight }
        }
        setGridSettings(new GridSettings(newSettings))
        setDirty(true)
    }, [gridSettings, setGridSettings])
    const resetRowsOrder = useCallback(() => {
        if (gridSettings.image) {
            let rowsOrder: number[] = []
            for (let i = 0; i < gridSettings.rows; i++) {
                rowsOrder.push(i)
            }
            setGridSettings(new GridSettings({ ...gridSettings, rowsOrder: rowsOrder }))
        }
    }, [gridSettings, setGridSettings])
    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText("window.gridSettings = " + JSON.stringify(gridSettings, null, 2) + ";")
        if (refToast.current) {
            let toast = new Toast(refToast.current)
            toast.show()
        }
    }, [gridSettings])
    return <div className="mx-2">
        <div>&#x7b;</div>
        <div>&nbsp;&nbsp;"header": <GridHeaderSettingsPanel headerSettings={gridSettings.header} onChange={(v) => changeSettings({ header: v })} />,</div>
        <div>&nbsp;&nbsp;"cell": <GridCellSettingsPanel cellSettings={gridSettings.cell} onChange={(v) => changeSettings({ cell: v })} />,</div>
        <div>&nbsp;&nbsp;"cols": <NumberInput value={gridSettings.cols} onChange={(v) => changeSettings({ cols: v })} />,</div>
        <div>&nbsp;&nbsp;"rows": <NumberInput value={gridSettings.rows} onChange={(v) => changeSettings({ rows: v })} />,</div>
        <div>&nbsp;&nbsp;"rowsOrder": <i className="bi bi-arrow-clockwise pe-auto" onClick={resetRowsOrder}></i> <pre className="d-inline">{gridSettings.rowsOrder ? JSON.stringify(gridSettings.rowsOrder, null, 2).replace(/^/mg, "  ").replace(/^ +/, '') : "undefined"}</pre>,</div>
        <div>&#x7d;</div>
        <div className="row">
            <div className="col-auto text-bg-warning" style={{ zIndex: 100, display: errorMessage.length > 0 ? "" : "none" }}>{errorMessage}</div>
            <div className="col-auto"><button className="btn btn-primary pe-auto" style={{ display: dirty ? "" : "none" }} onClick={copyToClipboard}>Copy</button></div>
        </div>
        <div className="toast-container p-3">
            <div className="toast" role="alert" ref={refToast}>
                <div className="toast-header">
                    <i className="bi bi-clipboard-check"></i>
                    <strong className="me-auto">GridSettings</strong>
                    <button type="button" className="btn-close pe-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    設定用JSONをクリップボードにコピーしました
                </div>
            </div>
        </div>
    </div>
}