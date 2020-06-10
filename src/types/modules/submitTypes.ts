// should be in order
export interface HeaderState {
    current: number
    stage: number[]
    progress: number[]
    header: string[]
}

export interface AboutState {
    description: string
    location: string
    tag: string
    tagList: string[]
}

export interface JobState {
    title: string
    industry: string
    experience: number
    earnings: number
    currency: boolean
    breakdown: boolean
    past: boolean
    breakdownList: Array<Salary>
    pastList: Array<Info>
}
    // breakdown + past interface
    export interface Info {
        title: string, 
        year: number,
        amount: number
    }
    export interface Salary {
        category: string
        amount: number
        description?: string
    }

    export interface ExpenseState {
        expenseList: Array<Expense>
    }
        export interface Expense {
            category: string
            amount: number
            description?: string
        }