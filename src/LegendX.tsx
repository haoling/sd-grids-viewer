import { RefObject, useEffect, useRef } from "react"
import { GridSettings } from "./GridSettings"

type Props = {
    image: RefObject<HTMLImageElement>
    imageLoaded: boolean
}

export const LegendX: React.FC<Props> = ({ image, imageLoaded }) => {
    let canvases: RefObject<HTMLCanvasElement>[] = []
    let elms = []
    if (imageLoaded) {
        for (let i = 0; i < window.gridSettings.getCols(); i++) {
            const ref = useRef<HTMLCanvasElement>(null)
            canvases.push(ref)
            const canvas = <canvas key={i} ref={ref}></canvas>
            elms.push(canvas)
        }
        useEffect(() => {
            for (let i = 0; i < canvases.length; i++) {
                const ref = canvases[i]
                if (ref.current) {
                    const ctx = ref.current.getContext('2d')
                    if (ctx && image.current) {
                        ref.current.width = window.gridSettings.cell.width
                        ref.current.height = window.gridSettings.header.height
                        console.log("Draw image")
                        ctx.drawImage(
                            image.current,
                            window.gridSettings.header.width + (i * window.gridSettings.cell.width), // sx
                            0, // sy
                            window.gridSettings.cell.width, // sw
                            window.gridSettings.header.height,// sh
                            0, // dx
                            0, // dy
                            window.gridSettings.cell.width, // dw
                            window.gridSettings.header.height // dh
                        )
                    }
                }
            }
        }, [])
    }
    return <>{elms}</>
}