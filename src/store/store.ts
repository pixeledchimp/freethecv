import { combineReducers } from 'redux'

import {
  PresentationActionsReducer,
  PresentationState,
} from '../components/presentation/Presentation'
import {
  UILayoutActionsReducer,
  UILayoutState,
} from '../components/ui-layout/UILayout'

export interface AppState {
  readonly presentation: PresentationState
  readonly uiLayout: UILayoutState
}

export const rootReducer = combineReducers<AppState>({
  presentation: PresentationActionsReducer,
  uiLayout: UILayoutActionsReducer,
})
