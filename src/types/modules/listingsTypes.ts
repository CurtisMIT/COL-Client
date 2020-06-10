export interface Entries {
    id: number;
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
export interface ViewState {
    view?: string;
    isTitle: boolean           
    title: string 
    isLocation: boolean
    location: string
    entries: Array<Entries>
}