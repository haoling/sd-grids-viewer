import { ReactNode } from "react"

export const GridContainer: React.FC<{children:ReactNode}> = ({children}) => {
    return <div className="container">{children}</div>
}