import { JobsActions } from './Actions'
import { JobsState, JobState } from './State'
import {RestoreState} from "../../helpers/SaveAndRestore";

const initialJobsState: JobsState = RestoreState()?.jobs || {
    title: 'Jobs',
    jobs: [] as JobState[],
}

export const JobsActionsReducer = (
    state = initialJobsState,
    action: JobsActions
) => {
    switch (action.type) {
        case 'JOBS_UPDATE_TITLE':
            return { ...state, title: action.title }

        case 'JOBS_ADD_JOB':
            return { ...state, jobs: [...state.jobs, action.job] }

        case 'JOBS_REMOVE_JOB':
            return {
                ...state,
                jobs: state.jobs.filter((j) => j.index !== action.index),
            }

        case 'JOBS_UPDATE_JOB':
            return {
                ...state,
                jobs: state.jobs.map((j) =>
                    j.index !== action.job.index ? j : action.job
                ),
            }
        default:
            return state
    }
}
