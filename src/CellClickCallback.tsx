import { createContext } from "react";

export type CellClickCallback = (rowIndex: number, colIndex: number) => void;
export const CellClickCallbackContext: React.Context<CellClickCallback> = createContext<CellClickCallback>(() => {});
