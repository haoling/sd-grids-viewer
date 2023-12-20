import { ReactEventHandler, useEffect, useRef, useState } from "react";
import { GridSettings } from "./GridSettings";
import { Grid } from "./Grid";
import { CellImageModal } from "./CellImageModal";

function App() {
  const pathbase = location.href.replace(/\.html?$/, '');
  const refImg = useRef<HTMLImageElement>(null);
  const [gridSettings, setGridSettings] = useState<GridSettings>(new GridSettings(window.gridSettings));
  useEffect(() => {
    if (refImg.current) {
      console.log("Start image loading");
      refImg.current.src = pathbase + '.png';
    }
  }, []);
  const onLoadedImage: ReactEventHandler<HTMLImageElement> = (event) => {
    setGridSettings(new GridSettings({ ...gridSettings, image: event.currentTarget }));
    console.log("Image loaded");
  }
  const onKeyDownCallback = (event: KeyboardEvent) => {
    console.log(event);
  }
  useEffect(() => {
    document.addEventListener("keydown", onKeyDownCallback, false);
  }, []);
  return (
    <>
      <img ref={refImg} style={{ display: "none" }} onLoad={onLoadedImage} />
      <GridSettings.Context.Provider value={gridSettings}>
        <Grid />
        <CellImageModal />
      </GridSettings.Context.Provider>
    </>
  )
}

export default App
