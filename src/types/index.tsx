
export interface StoreState {
    todos: Todos;
    visibilityFilter: VisibilityFilter;
}

export type Todos = {id:number, text:string, completed:boolean}[]
export type VisibilityFilter = {}