export interface JobState {
    entity?: string
    from?: string
    until?: string
    description?: string
    location?: string
    key: number
}

export interface JobsState {
    title: string
    jobs: JobState[]
}
