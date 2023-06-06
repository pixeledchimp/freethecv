import { UILayoutHideFormActions } from './Actions'
import { initialUILayoutHideFormActionState } from './State'

export const UILayoutActionsReducer = (
    state = initialUILayoutHideFormActionState,
    action: UILayoutHideFormActions
) => {
    switch (action.type) {
        case 'UILAYOUT_TOGGLE_FORM':
            return {
                hide: action.hide || false,
            }

        default:
            return state
    }
}
