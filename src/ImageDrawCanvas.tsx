import { RefObject, useEffect, useRef } from "react"

type Props = {
    image: RefObject<HTMLImageElement>
    sx: number
    sy: number
    sw: number
    sh: number
}

export const ImageDrawCanvas: React.FC<Props> = ({ image, sx, sy, sw, sh }) => {
    const ref = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        const tintervalId = setInterval(() => {
            if (ref.current) {
                const ctx = ref.current.getContext('2d')
                if (ctx && image.current) {
                    ref.current.width = sw
                    ref.current.height = sh
                    ctx.drawImage(
                        image.current,
                        sx, // sx
                        sy, // sy
                        sw, // sw
                        sh,// sh
                        0, // dx
                        0, // dy
                        sw, // dw
                        sh // dh
                    )
                    clearInterval(tintervalId)
                }
            }
        }, 100)
    }, [image, sx, sy, sw, sh])
    return <canvas ref={ref}></canvas>
}