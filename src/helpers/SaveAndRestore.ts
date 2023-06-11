import {AppState} from "../store/store";

export function SaveState(state: AppState) : void {
    localStorage && localStorage.setItem('AppState', JSON.stringify(state))
}

export function RestoreState() : AppState | null {
    const inLocalStorage = localStorage.getItem('AppState')
    const state = JSON.parse(inLocalStorage ?? '{}') as AppState | null
    return localStorage && state
}

export function UpdateState(updater: (state:AppState | null) => AppState ) :void {
    // Get Staved State
    const state = RestoreState()
    
    // Update State
    const updatedState = updater(state)
    
    // SaveState
    SaveState(updatedState)
}