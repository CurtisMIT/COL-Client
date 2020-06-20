export interface Basic {
    date: string,
    title: string,
    experience: number,
    earnings: number,
    expenses: number,
    location: string,
    industry: string,
    quote: string,
    tag: Array<String>
}

export interface TableList {
    category: string,
    amount: number,
    description?: string,
    isOpen?: boolean
}

export interface Growth {
    title: string
    amount: number,
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

export interface Market {
    title: string
    earnings: number
    expenses: number
    experience: number
}

export interface Listings {
    individual_id: number;
    title: string;
    experience: number;
    location: string;
    industry: string;
    earnings: string;
    expenses: string;
    quote: string;
    tags: string[]
    date: string;
}

export interface IndividualState {
    basic: Basic[]
    earnings: Array<TableList>
    growth: Array<Growth>
    expenses: Array<TableList>
    market: Array<Market>    
    others: Array<Listings>    
}