import {AppState} from "../store/store";

export function SaveState(state: AppState) : void {
    new Promise<void>(() => {
        localStorage && localStorage.setItem('AppState', JSON.stringify(state))
    }).then()
}

export function RestoreState() : AppState | null {
    const inLocalStorage = localStorage.getItem('AppState')
    return inLocalStorage && JSON.parse(inLocalStorage as string) as AppState || null
}
