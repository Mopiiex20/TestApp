import { Names } from "./common"

export interface PostDataResponse {
    id: string
}

export type GetDataResponse<T> = {
    data: T[]
}

export interface DocType {
    data: Fields
}


interface Fields {
    name: Names
    timestamp: string
}