import { Modal } from "bootstrap";
import { GridCellImage } from "./GridCellImage"
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { LegendX } from "./LegendX";
import { LegendY } from "./LegendY";
import { GridSettingsContainerContext } from "./GridSettingsContainer";


type Props = {
    show?: boolean
    defaultZoom?: number
    rowIndex: number
    colIndex: number
    onClosing?: (event: Event) => void
}

export const CellImageModal: React.FC<Props> = ({ show: showParam, defaultZoom, rowIndex, colIndex, ...eventHandlers }) => {
    const {gridSettings} = useContext(GridSettingsContainerContext)
    const [show, setShow] = showParam !== undefined ? [showParam, () => { }] : useState(false);
    const [zoom, setZoom] = useState(defaultZoom !== undefined ? defaultZoom : 1.0);
    const refModal = useRef<HTMLDivElement>(null);

    const onEscapeKeyDown = useCallback((e: Event) => {
        if (showParam !== undefined && !eventHandlers.onClosing) {
            console.log("Modal is controlled by parent, but no onClosing handler is provided.")
            e.preventDefault()
            return;
        }
        setShow(false);
        eventHandlers.onClosing?.(e);
    }, [])
    useEffect(() => {
        if (refModal.current) {
            refModal.current.addEventListener("hide.bs.modal", onEscapeKeyDown);
        }
    }, [refModal.current])
    useEffect(() => {
        if (!refModal.current) {
            return;
        }
        const modal = new Modal(refModal.current, { keyboard: true });
        if (show) {
            modal.show();
            setZoom(1.0)
        } else {
            modal.hide();
        }
    }, [show, showParam])

    const onMouseWheel = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
        if (event.deltaY < 0) {
            // Zoom in
            setZoom(zoom + 0.1);
        } else if (zoom > 0.15) {
            // Zoom out
            setZoom(zoom - 0.1);
        }
    }, [zoom, defaultZoom])

    return <>
        <div className="modal fade" ref={refModal} id="lightboxModalFullscreen" tabIndex={-1}>
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content" style={{ backgroundColor: "unset" }}>
                    <div className="modal-body">
                        <div className="position-absolute z-n1 top-0 left-0" style={{ opacity: 0.7, zoom: 0.5 }}>
                            <div className="row">
                                <div className="col-auto bg-light" style={{ minWidth: gridSettings.header.width, minHeight: gridSettings.header.height }}>
                                </div>
                                <div className="col-auto bg-light p-1">
                                    <LegendX colIndex={colIndex} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto bg-light p-1">
                                    <LegendY rowIndex={rowIndex} />
                                </div>
                            </div>
                        </div>
                        <div className="m-0 w-100 h-100 d-flex align-items-center justify-content-center position-relative" style={{ zoom: zoom, overflow: "hidden" }} onWheel={onMouseWheel}>
                            <GridCellImage rowIndex={rowIndex} colIndex={colIndex} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}