import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import './UILayout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { UILayoutHideFormActionCreator } from './Actions'

export interface UILayoutProps {
    formElements?: JSX.Element[]
    templateElements?: JSX.Element[]
}

export const UILayout = (props: UILayoutProps) => {
    const state = useSelector((appstate: AppState) => appstate.uiLayout)
    const dispatch = useDispatch()

    const hideForm = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()
        dispatch(UILayoutHideFormActionCreator(true))
    }

    const showForm = () => {
        dispatch(UILayoutHideFormActionCreator(false))
    }

    return (
        <div className="container" onDoubleClick={showForm}>
            {!state.hide && (
                <div className="form">
                    <span onClick={hideForm} className="close">
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                    {props.formElements &&
                        props.formElements.map((x, i) => (
                            <div key={i} className="form-block">
                                {x}
                            </div>
                        ))}
                </div>
            )}
            <div className="template">
                {props.templateElements &&
                    props.templateElements.map((x, i) => (
                        <div key={i} className="view-block">
                            {x}
                        </div>
                    ))}
            </div>
        </div>
    )
}
