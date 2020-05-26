export interface Basic {
    title: string,
    experience: number,
    location: string,
    industry: string,
    quote: string,
    tag: Array<String>
}

export interface Earnings { 
    description: string,
    amount: number,
    information?: string
}

export interface Growth {
    title: string
    salary: number,
    year: number,        
}

export interface Expenses {
    description: string,
    amount: number,
    information?: string    
}

export interface MarketSalary {
    title: string
    salary: number,
    year: number,    
}

export interface MarketCOL {
    title: string
    col: number,
    year: number,    
}


export interface IndividualState {
    basic?: Basic | object
    earnings: Array<Earnings>
    growth: Array<Growth>
    expenses: Array<Expenses>
    marketSalary: Array<MarketSalary>
    marketCOL: Array<MarketCOL>
    location: string
    date: string
}