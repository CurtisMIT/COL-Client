export interface Basic {
    date: string,
    title: string,
    experience: number,
    location: string,
    industry: string,
    quote: string,
    tag: Array<String>
}

export interface TableList {
    category: string,
    amount: number,
    information?: string  
}

export interface Growth {
    title: string
    salary: number,
    year: number,        
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
    earnings: Array<TableList>
    growth: Array<Growth>
    expenses: Array<TableList>
    marketSalary: Array<MarketSalary>
    marketCOL: Array<MarketCOL>
    location: string,        
}