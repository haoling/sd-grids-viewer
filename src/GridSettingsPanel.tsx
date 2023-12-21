import { GridCellSettings, GridHeaderSettings, GridSettings } from "./GridSettings"

const NumberInput: React.FC<{value:number, onChange:(value:number) => void, step?:number}> = ({value, onChange, step=1}) => {
    return <input type="number" style={{width:"3rem"}} step={step} value={value} onChange={(event) => onChange(parseInt(event.target.value))} />
}

const GridHeaderSettingsPanel: React.FC<{headerSettings:GridHeaderSettings, onChange: (headerSettings: GridHeaderSettings) => void}> = ({headerSettings, onChange}) => {
    return <>&#x7b;
        <div className="ps-2">
            <div>"header": &#x7b;</div>
            <div className="ps-2">
                <div>"width": <NumberInput value={headerSettings.width} onChange={(v)=>onChange({...headerSettings, width:v})} step={8} /></div>
                <div>"height": <NumberInput value={headerSettings.height} onChange={(v)=>onChange({...headerSettings, height:v})} /></div>
            </div>
            <div>&#x7d;</div>
        </div>
    </>
}

const GridCellSettingsPanel: React.FC<{cellSettings:GridCellSettings, onChange: (cellSettings: GridCellSettings) => void}> = ({cellSettings, onChange}) => {
    return <>&#x7b;
        <div className="ps-2">
            <div>"header": &#x7b;</div>
            <div className="ps-2">
                <div>"width": <NumberInput value={cellSettings.width} onChange={(v)=>onChange({...cellSettings, width:v})} step={8} /></div>
                <div>"height": <NumberInput value={cellSettings.height} onChange={(v)=>onChange({...cellSettings, height:v})} step={8} /></div>
            </div>
            <div>&#x7d;</div>
        </div>
    </>
}

type Props = {
    gridSettings: GridSettings
    setGridSettings: (gridSettings: GridSettings) => void
}

export const GridSettingsPanel: React.FC<Props> = ({gridSettings, setGridSettings}) => {
    return <div className="container">
        <div>&#x7b;</div>
        <div className="ps-2">
            <div>"header": <GridHeaderSettingsPanel headerSettings={gridSettings.header} onChange={(v)=>setGridSettings(new GridSettings({...gridSettings, header:v}))} /></div>
            <div>"cell": <GridCellSettingsPanel cellSettings={gridSettings.cell} onChange={(v)=>setGridSettings(new GridSettings({...gridSettings, cell:v}))} /></div>
            <div>"cols": <NumberInput value={gridSettings.cols} onChange={(v)=>setGridSettings(new GridSettings({...gridSettings, cols:v}))} /></div>
            <div>"rows": <NumberInput value={gridSettings.rows} onChange={(v)=>setGridSettings(new GridSettings({...gridSettings, rows:v}))} /></div>
        </div>
        <div>&#x7d;</div>
    </div>
}