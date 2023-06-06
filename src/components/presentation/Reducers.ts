import { PresentationActions } from './Actions'
import { initialPresentationComponentState } from './State'

export const PresentationActionsReducer = (
    state = initialPresentationComponentState,
    action: PresentationActions
) => {
    switch (action.type) {
        case 'PRESENTATION_UPDATE_TITLE':
            return { ...state, title: action.title || '' }

        case 'PRESENTATION_UPDATE_SUBTITLE':
            return { ...state, subtitle: action.subtitle || '' }

        case 'PRESENTATION_UPDATE_INTRODUCTION':
            return { ...state, introduction: action.introduction || '' }

        case 'PRESENTATION_UPDATE_PHOTO':
            return { ...state, photo: action.photo || '' }

        default:
            return state
    }
}
