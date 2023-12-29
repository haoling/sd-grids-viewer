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
  const setGritSettingsDirty = useRef<() => void>(() => { });
  const [gridSettings, setGridSettings] = useState<GridSettings>(new GridSettings({ ...window.gridSettings, rowsOrder: undefined }));
  const [modalShow, setModalShow] = useState(false);
  const [modalRowIndex, setModalRowIndex] = useState(0);
  const [modalColIndex, setModalColIndex] = useState(0);
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
    setGridSettings(new GridSettings({ ...gridSettings, image: event.currentTarget, rowsOrder: window.gridSettings.rowsOrder }));
    console.log("Image loaded");
  }, [gridSettings])
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
    isDirty && setGritSettingsDirty.current();
  }, [gridSettings])
  const onKeyDownCallback = useCallback((event: KeyboardEvent) => {
    if (!modalShow) {
      return;
    }
    if (gridSettings.rowsOrder) {
      if (event.key === "ArrowUp") {
        const rowSortIndex = gridSettings.rowsOrder.indexOf(modalRowIndex + 1);
        if (rowSortIndex > 1) {
          setModalRowIndex(gridSettings.rowsOrder[rowSortIndex - 1] - 1);
        }
      }
      if (event.key === "ArrowDown") {
        const rowSortIndex = gridSettings.rowsOrder.indexOf(modalRowIndex + 1);
        if (rowSortIndex < gridSettings.rowsOrder.length - 1) {
          setModalRowIndex(gridSettings.rowsOrder[rowSortIndex + 1] - 1);
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
    }
  }, [gridSettings, modalShow, modalRowIndex, modalColIndex, setModalRowIndex, setModalColIndex])
  useKey(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], onKeyDownCallback)
  return (
    <>
      <img ref={refImg} style={{ display: "none" }} onLoad={onLoadedImage} />
      <GridSettings.Context.Provider value={gridSettings}>
        <CellClickCallbackContext.Provider value={cellClickCallback}>
          <Grid rowSortList={gridSettings.rowsOrder ?? []} setRowSortList={setRowSortList} />
        </CellClickCallbackContext.Provider>
        <CellImageModal show={modalShow} rowIndex={modalRowIndex} colIndex={modalColIndex} onClosing={onModalClosing} />
      </GridSettings.Context.Provider>
      <div className="container pe-none position-absolute top-0 left-0">
        <GridSettingsPanel gridSettings={gridSettings} setGridSettings={setGridSettings} setDirtyRef={setGritSettingsDirty} />
      </div>
    </>
  )
}

export default App
