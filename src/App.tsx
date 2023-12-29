import { ReactEventHandler, useCallback, useEffect, useRef, useState } from "react";
import { GridSettings } from "./GridSettings";
import { Grid } from "./Grid";
import { CellImageModal } from "./CellImageModal";
import { CellClickCallbackContext } from "./CellClickCallback";
import { useKey } from "rooks";
import { GridSettingsPanel } from "./GridSettingsPanel";

function App() {
  const pathbase = location.href.replace(/\.html?$/, '');
  const refImg = useRef<HTMLImageElement>(null);
  const [gridSettings, setGridSettings] = useState<GridSettings>(new GridSettings(window.gridSettings));
  const [modalShow, setModalShow] = useState(false);
  const [modalRowIndex, setModalRowIndex] = useState(0);
  const [modalColIndex, setModalColIndex] = useState(0);
  const [rowSortList, setRowSortList] = useState<number[]>([])
  const cellClickCallback = useCallback((rowIndex: number, colIndex: number) => {
    setModalRowIndex(rowIndex);
    setModalColIndex(colIndex);
    setModalShow(true);
  }, [setModalRowIndex, setModalColIndex, setModalShow])
  const onModalClosing = useCallback(() => {
    setModalShow(false);
  }, [setModalShow])
  useEffect(() => {
    if (refImg.current) {
      console.log("Start image loading");
      refImg.current.src = pathbase + '.png';
    }
  }, []);
  const onLoadedImage = useCallback<ReactEventHandler<HTMLImageElement>>((event) => {
    setGridSettings(new GridSettings({ ...gridSettings, image: event.currentTarget }));
    console.log("Image loaded");
  }, [gridSettings])
  const onKeyDownCallback = useCallback((event: KeyboardEvent) => {
    if (! modalShow) {
      return;
    }
    if (event.key === "ArrowUp") {
      const rowSortIndex = rowSortList.indexOf(modalRowIndex + 1);
      if (rowSortIndex > 1) {
        setModalRowIndex(rowSortList[rowSortIndex - 1] - 1);
      }
    }
    if (event.key === "ArrowDown") {
      const rowSortIndex = rowSortList.indexOf(modalRowIndex + 1);
      if (rowSortIndex < rowSortList.length - 1) {
        setModalRowIndex(rowSortList[rowSortIndex + 1] - 1);
      }
    }
    if (event.key === "ArrowLeft") {
      if (modalColIndex > 0) {
        setModalColIndex(modalColIndex - 1);
      }
    }
    if (event.key === "ArrowRight") {
      if (modalColIndex < gridSettings.cols - 1) {
        setModalColIndex(modalColIndex + 1);
      }
    }
  }, [gridSettings, modalShow, modalRowIndex, modalColIndex, setModalRowIndex, setModalColIndex])
  useKey(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], onKeyDownCallback)
  return (
    <>
      <img ref={refImg} style={{ display: "none" }} onLoad={onLoadedImage} />
      <GridSettings.Context.Provider value={gridSettings}>
        <CellClickCallbackContext.Provider value={cellClickCallback}>
          <Grid rowSortList={rowSortList} setRowSortList={setRowSortList} />
        </CellClickCallbackContext.Provider>
        <CellImageModal show={modalShow} rowIndex={modalRowIndex} colIndex={modalColIndex} onClosing={onModalClosing} />
      </GridSettings.Context.Provider>
      <div className="container position-absolute top-0 left-0">
        <GridSettingsPanel gridSettings={gridSettings} setGridSettings={setGridSettings} />
      </div>
    </>
  )
}

export default App
