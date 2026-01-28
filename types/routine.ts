export type RoutineComponent = {
    id: number
    date: string
    notes: string
    products: string
    routine_routine_types: {
        routine_types: {
            id: number
            name: string
        }
    }[]
}