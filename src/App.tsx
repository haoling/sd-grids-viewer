import { ReactEventHandler, useCallback, useEffect, useRef } from "react";
import { Grid } from "./Grid";
import { CellImageModalContainer } from "./CellImageModalContainer";
import { GridSettingsContainer, GridSettingsContainerType } from "./GridSettingsContainer";

function App() {
  const pathbase = location.href.replace(/\.html?$/, '');
  const refImg = useRef<HTMLImageElement>(null);
  const gridSettingsContainerRef = useRef<GridSettingsContainerType>(null);

  useEffect(() => {
    if (refImg.current) {
      console.log("Start image loading");
      refImg.current.src = pathbase + '.png';
    }
  }, []);

  const onImageLoaded = useCallback<ReactEventHandler<HTMLImageElement>>((event) => {
    if (gridSettingsContainerRef.current) {
      gridSettingsContainerRef.current.onImageLoaded(event);
    }
  }, [gridSettingsContainerRef]);

  return <>
    <img ref={refImg} style={{ display: "none" }} onLoad={onImageLoaded} />
    <GridSettingsContainer ref={gridSettingsContainerRef}>
      <CellImageModalContainer>
        <Grid />
      </CellImageModalContainer>
    </GridSettingsContainer>
  </>
}

export default App
