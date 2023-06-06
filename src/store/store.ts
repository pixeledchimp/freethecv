import { combineReducers } from 'redux'
import { UILayoutState } from '../components/ui-layout/State'
import { JobsState } from '../components/Jobs/State'
import { PresentationState } from '../components/presentation/State'
import { PresentationActionsReducer } from '../components/presentation/Reducers'
import { UILayoutActionsReducer } from '../components/ui-layout/Reducers'
import { JobsActionsReducer } from '../components/Jobs/Reducers'

export interface AppState {
    readonly presentation: PresentationState
    readonly uiLayout: UILayoutState
    readonly jobs: JobsState
}

export const rootReducer = combineReducers<AppState>({
    presentation: PresentationActionsReducer,
    uiLayout: UILayoutActionsReducer,
    jobs: JobsActionsReducer,
})
