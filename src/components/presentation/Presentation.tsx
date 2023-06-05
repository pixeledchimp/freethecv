import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../store/store'

// Props interface
export interface PresentationState {
  title: string
}

// Actions
export interface PresentationUpdateTitleAction {
  type: 'PRESENTATION_UPDATE_TITLE'
  title: string
}

// Action creators
export const PresentationUpdateTitleActionCreator: (
  title: string
) => PresentationUpdateTitleAction = (title) =>
  ({
    type: 'PRESENTATION_UPDATE_TITLE',
    title,
  } as const)

// Reducer
export type PresentationActions = ReturnType<
  typeof PresentationUpdateTitleActionCreator
>

export const initialPresentationComponentState: PresentationState = {
  title: '',
}

export const PresentationActionsReducer = (
  state = initialPresentationComponentState,
  action: PresentationActions
) => {
  switch (action.type) {
    case 'PRESENTATION_UPDATE_TITLE':
      return { title: action.title || '' }
    default:
      return state
  }
}

// Component Form
export const Presentationform = () => {
  const dispatch = useDispatch()

  const updateTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch(PresentationUpdateTitleActionCreator(e.currentTarget.value))
  }

  const state = useSelector((appstate: AppState) => appstate.presentation)
  return (
    <div className='presentation-form'>
      <div className='label'>Title:</div>
      <input
        type='text'
        placeholder='Set the title'
        defaultValue={state.title}
        onKeyUp={updateTitle}
      />
    </div>
  )
}

// Component View
export const Presentation = () => {
  const state = useSelector((appstate: AppState) => appstate.presentation)
  return (
    <div className='presentation'>
      <h1>{state.title}</h1>
    </div>
  )
}
