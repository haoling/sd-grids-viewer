import { RefObject } from "react"
import { ImageDrawCanvas } from "./ImageDrawCanvas"

type Props = {
    image: RefObject<HTMLImageElement>
    imageLoaded: boolean
}

export const LegendX: React.FC<Props> = ({ image, imageLoaded }) => {
    let canvases: JSX.Element[] = []
    if (imageLoaded) {
        for (let i = 0; i < window.gridSettings.getCols(); i++) {
            const canvas = <ImageDrawCanvas
                key={i}
                image={image}
                sx={window.gridSettings.header.width + (i * window.gridSettings.cell.width)}
                sy={0}
                sw={window.gridSettings.cell.width}
                sh={window.gridSettings.header.height}
            />
            canvases.push(canvas)
        }
    }
    return <>{canvases}</>
}