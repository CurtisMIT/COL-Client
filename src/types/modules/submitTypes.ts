// should be in order
export interface HeaderState {
    current: number
    stage: number[]
    progress: number[]
    header: string[]
}

export interface AboutState {
    description: string
    tag: string
    tagList: string[]
}

export interface JobState {
    job: string
    industry: string
    yoe: number
    salary: number
    currency: string
    breakdown: boolean
    past: boolean
    breakdownList: Array<Salary>
    pastList: Array<Info>
}
    // breakdown + past interface
    export interface Info {
        job: string, 
        year: number,
        amount: number
    }
    export interface Salary {
        type: string
        amount: number
        description?: string
    }
