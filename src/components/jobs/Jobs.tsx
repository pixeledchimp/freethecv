import { useDispatch, useSelector } from 'react-redux'
import './Jobs.scss'
import { AppState } from '../../store/store'
import {
    JobsAddJobActionCreator,
    JobsRemoveJobActionCreator,
    JobsUpdateJobActionCreator,
    JobsUpdateTitleActionCreator,
} from './Actions'
import { JobState } from './State'
import React, { Fragment } from 'react'

export const JobsForm = () => {
    const dispatch = useDispatch()

    /**
     * Updates the title
     * @param e {React.KeyboardEvent<HTMLInputElement>}
     */
    const updateTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        dispatch(JobsUpdateTitleActionCreator(e.currentTarget.value))
    }

    /**
     * Adds a new job to the collection
     * @param e {React.MouseEvent}
     */
    const addJob = (e: React.MouseEvent) => {
        const newJob: JobState = {
            entity: '',
            description: '',
            from: '',
            until: '',
            location: '',
            index: state.jobs.length
                ? Math.max(...state.jobs.map((x) => x.index)) + 1
                : 0,
        }
        dispatch(JobsAddJobActionCreator(newJob))
    }

    /**
     * Removes a Job
     * @param index {number}
     */
    const removeJob = (index: number) => {
        dispatch(JobsRemoveJobActionCreator(index))
    }

    const updateJob = (
        e:
            | React.KeyboardEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        const propName = e.currentTarget.getAttribute('data-prop')
        const dataIndex = e.currentTarget.getAttribute('data-index')
        if (!dataIndex || !propName) return
        const index = parseInt(dataIndex)
        const [job] = state.jobs.filter((x) => x.index === index)

        let updatedJob: JobState = { ...job }
        switch (propName) {
            case 'entity':
                updatedJob.entity = e.currentTarget.value
                break

            case 'description':
                updatedJob.description = e.currentTarget.value
                break

            case 'from':
                updatedJob.from = e.currentTarget.value
                break

            case 'until':
                updatedJob.until = e.currentTarget.value
                break

            case 'location':
                updatedJob.location = e.currentTarget.value
                break

            default:
                return
        }

        dispatch(JobsUpdateJobActionCreator(updatedJob))
    }

    const state = useSelector((state: AppState) => state.jobs)
    return (
        <Fragment>
            <div className="field-block">
                <div className="label">Jobs section title:</div>
                <input
                    type="text"
                    placeholder="Set the title"
                    defaultValue={state.title}
                    onKeyUp={updateTitle}
                />
            </div>

            <div className="field-block">
                <div className="label">Jobs:</div>

                {state.jobs.map((x) => (
                    <div className="job-field-block" key={x.index}>
                        <div className="field-block">
                            <div className="label">Entity</div>
                            <input
                                type="text"
                                defaultValue={x.entity}
                                data-index={x.index}
                                data-prop="entity"
                                onKeyUp={updateJob}
                            />
                        </div>
                        <div className="field-block">
                            <div className="label">Description</div>
                            <textarea
                                defaultValue={x.description}
                                data-index={x.index}
                                data-prop="description"
                                onKeyUp={updateJob}
                            />
                        </div>

                        <div className="field-block">
                            <div className="label">From</div>
                            <input
                                type="text"
                                defaultValue={x.from}
                                data-index={x.index}
                                data-prop="from"
                                onKeyUp={updateJob}
                            />
                        </div>

                        <div className="field-block">
                            <div className="label">Until</div>
                            <input
                                type="text"
                                defaultValue={x.until}
                                data-index={x.index}
                                data-prop="until"
                                onKeyUp={updateJob}
                            />
                        </div>

                        <div className="field-block">
                            <div className="label">Location</div>
                            <input
                                type="text"
                                defaultValue={x.location}
                                data-index={x.index}
                                data-prop="location"
                                onKeyUp={updateJob}
                            />
                        </div>
                        <a
                            className="pointer button"
                            onClick={() => removeJob(x.index)}
                        >
                            Remove Job
                        </a>
                    </div>
                ))}

                <a className="pointer button" onClick={addJob}>
                    Add Job
                </a>
            </div>
        </Fragment>
    )
}
export const Jobs = () => {
    const state = useSelector((state: AppState) => state.jobs)

    return (
        <div className="jobs-section">
            <h1>{state.title}</h1>
            {state.jobs.map((j) => (
                <Job {...j} key={j.index} />
            ))}
        </div>
    )
}

const Job = (props: JobState) => {
    return (
        <div className="job-model">
            <div className="entity">
                <h2>{props.entity}</h2>
                {props.from && (
                    <span className="dates">
                        {props.from} - {props.until}
                    </span>
                )}
                <span className="locaion">{props.location}</span>
            </div>

            <div className="description">{props.description}</div>
        </div>
    )
}
