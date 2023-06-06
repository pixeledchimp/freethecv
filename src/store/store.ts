import { combineReducers } from 'redux'

import {
    UILayoutActionsReducer,
    UILayoutState,
} from '../components/ui-layout/UILayout'
import {
    PresentationActionsReducer,
    PresentationState,
} from '../components/presentation/Reducers'
import { JobsActionsReducer, JobsState } from '../components/Jobs/Reducers'

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
