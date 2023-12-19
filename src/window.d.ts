import { GridSettings } from "./GridSettings"

declare global {
    interface Window {
        gridSettings: GridSettings;
    }
}
