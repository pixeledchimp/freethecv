import { combineReducers } from 'redux'

import {
  PresentationActionsReducer,
  PresentationProps,
} from '../components/presentation/Presentation'

export interface AppState {
  readonly presentation: PresentationProps
}

export const rootReducer = combineReducers<AppState>({
  presentation: PresentationActionsReducer,
})
