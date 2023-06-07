import { useDispatch, useSelector } from 'react-redux'
import './Jobs.scss'
import { AppState } from '../../store/store'
import { JobsUpdateTitleActionCreator } from './Actions'
import { JobState } from './State'

export const JobsForm = () => {
    const dispatch = useDispatch()

    /**
     * Updates the title
     * @param e {React.KeyboardEvent<HTMLInputElement>}
     */
    const updateTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        dispatch(JobsUpdateTitleActionCreator(e.currentTarget.value))
    }

    const state = useSelector((state: AppState) => state.jobs)
    return (
        <div className="field-block">
            <div className="label">Jobs section title:</div>
            <input
                type="text"
                placeholder="Set the title"
                defaultValue={state.title}
                onKeyUp={updateTitle}
            />
        </div>
    )
}
export const Jobs = () => {
    const state = useSelector((state: AppState) => state.jobs)

    return (
        <div className="jobs-section">
            <h1>{state.title}</h1>
            <a className="pointer">Add Job</a>
            {state.jobs.map((j, i) => (
                <Job {...j} key={i} />
            ))}
        </div>
    )
}

const Job = (props: JobState) => {
    return (
        <div className="job-model">
            <div className="entity">
                <h2>{props.entity}</h2>
                <span className="dates">
                    {props.from} - {props.until}
                </span>
                <span className="locaion">{props.location}</span>
            </div>

            <div className="description">{props.description}</div>
        </div>
    )
}
