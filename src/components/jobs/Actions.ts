import { JobState } from './State'

/**
 * UPDATE TITLE
 */
export interface JobsUpdateTitleAction {
    type: 'JOBS_UPDATE_TITLE'
    title: string
}

export const JobsUpdateTitleActionCreator: (
    title: string
) => JobsUpdateTitleAction = (title) => ({
    type: 'JOBS_UPDATE_TITLE',
    title,
})

/**
 * ADD JOB
 */
export interface JobsAddJobAction {
    type: 'JOBS_ADD_JOB'
    job: JobState
}

export const JobsAddJobActionCreator: (job: JobState) => JobsAddJobAction = (
    job: JobState
) =>
    ({
        type: 'JOBS_ADD_JOB',
        job,
    } as const)

/**
 * REMOVE JOB
 */
export interface JobRemoveJobAction {
    type: 'JOBS_REMOVE_JOB'
    index: number
}

export const JobsRemoveJobActionCreator: (
    index: number
) => JobRemoveJobAction = (index) =>
    ({
        type: 'JOBS_REMOVE_JOB',
        index,
    } as const)

/**
 * UPDATE JOB
 */
export interface JobUpdateJobAction {
    type: 'JOBS_UPDATE_JOB'
    job: JobState
}

export const JobsUpdateJobActionCreator: (
    job: JobState
) => JobUpdateJobAction = (job) =>
    ({
        type: 'JOBS_UPDATE_JOB',
        job,
    } as const)

export type JobsActions =
    | ReturnType<typeof JobsAddJobActionCreator>
    | ReturnType<typeof JobsUpdateJobActionCreator>
    | ReturnType<typeof JobsRemoveJobActionCreator>
    | ReturnType<typeof JobsUpdateTitleActionCreator>
