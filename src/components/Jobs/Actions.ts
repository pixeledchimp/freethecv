export interface JobState {
    entity?: string
    from?: string
    until?: string
    description?: string
    location?: string
    key: number
}

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

export interface JobRemoveJobAction {
    type: 'JOBS_REMOVE_JOB'
    jobIndex: number
}

export const JobsRemoveJobActionCreator: (
    jobIndex: number
) => JobRemoveJobAction = (jobIndex) =>
    ({
        type: 'JOBS_REMOVE_JOB',
        jobIndex,
    } as const)

export type JobsActions =
    | ReturnType<typeof JobsUpdateTitleActionCreator>
    | ReturnType<typeof JobsAddJobActionCreator>
