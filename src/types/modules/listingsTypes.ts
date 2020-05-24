export interface Entries {
    id: number;
    job: string;
    experience: string;
    location: string;
    industry: string;
    earnings: string;
    expenses: string;
    quote: string;
    tag1: string;
    tag2: string;
    date: string;
}
export interface ViewState {
    view?: string;            
    entries: Array<Entries>
}