import { Modal } from "bootstrap";
import { GridCellImage } from "./GridCellImage"
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {}

export const CellImageModal: React.FC<Props> = ({ }) => {
    const [show, setShow] = useState(false);
    const refModal = useRef<HTMLDivElement>(null);
    const onButtonClicked = useCallback(() => {
        setShow(true);
    }, [])
    const onEscapeKeyDown = useCallback(() => {
        setShow(false);
    }, [])
    useEffect(() => {
        if (refModal.current) {
            refModal.current.addEventListener("hide.bs.modal", onEscapeKeyDown);
        }
    }, [refModal.current])
    useEffect(() => {
        const modal = new Modal(refModal.current!, { keyboard: true });
        if (show) {
            modal.show();
        } else {
            modal.hide();
        }
    }, [show])
    return <>
        <button type="button" className="btn btn-primary" onClick={onButtonClicked}>
            Launch demo modal
        </button>
        <div className="modal fade" ref={refModal} id="lightboxModalFullscreen" tabIndex={-1}>
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{backgroundColor:"unset"}}>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <GridCellImage rowIndex={0} colIndex={0} />
              </div>
            </div>
          </div>
        </div>
    </>
}