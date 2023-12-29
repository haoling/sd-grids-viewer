import { ReactNode, useCallback, useContext, useState } from "react"
import { CellClickCallbackContext } from "./CellClickCallback"
import { CellImageModal } from "./CellImageModal"
import { useKey } from "rooks"
import { GridSettingsContainerContext } from "./GridSettingsContainer"

type Props = {
    children: ReactNode
}

export const CellImageModalContainer: React.FC<Props> = ({ children }) => {
    const {gridSettings} = useContext(GridSettingsContainerContext)
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
    const onKeyDownCallback = useCallback((event: KeyboardEvent) => {
        if (!modalShow) {
            return;
        }
        if (gridSettings.rowsOrder) {
            if (event.key === "ArrowUp") {
                const rowSortIndex = gridSettings.rowsOrder.indexOf(modalRowIndex);
                if (rowSortIndex > 0) {
                    setModalRowIndex(gridSettings.rowsOrder[rowSortIndex - 1]);
                }
            }
            if (event.key === "ArrowDown") {
                const rowSortIndex = gridSettings.rowsOrder.indexOf(modalRowIndex);
                if (rowSortIndex < gridSettings.rowsOrder.length - 1) {
                    setModalRowIndex(gridSettings.rowsOrder[rowSortIndex + 1]);
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
    return <>
        <CellClickCallbackContext.Provider value={cellClickCallback}>
            {children}
        </CellClickCallbackContext.Provider>
        <CellImageModal show={modalShow} rowIndex={modalRowIndex} colIndex={modalColIndex} onClosing={onModalClosing} />
    </>
}