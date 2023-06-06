import { JobsActions } from './Actions'
import { JobState, JobsState } from './State'

const initialJobsState: JobsState = {
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

        default:
            return state
    }
}
