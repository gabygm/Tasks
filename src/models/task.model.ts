export interface Task {
    name: string
    description: string
    status: Status
    labels: string[]
}

enum Status {
    TO_DO= "TO_DO", 
    IN_PROGRESS="IN_PROGRESS", 
    DONE="DONE"
}