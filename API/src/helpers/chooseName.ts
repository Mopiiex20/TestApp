import { Names } from "../types/common"

export function chooseName() {
    const index = Math.floor(Math.random() * 3)
    const nameIndex = Object.keys(Names)[index]
    return Names[nameIndex]
}