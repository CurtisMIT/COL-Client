export interface Header {
    current: number
    stage: number[]
    progress: number[]
    title: string[]
}
export interface About {
    description: string
    tag: string
    tagList: string[]
}
export interface SubmitState extends Header, About{}