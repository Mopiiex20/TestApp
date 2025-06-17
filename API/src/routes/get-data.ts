import { defaultSuccessMessage, defaultFailMessage } from "../services/defaultResponses"
import { getData } from "../services/read-data"
import { NumberOfRepeats } from "../types/common"

export default async (_, res) => {
    const info = await getData()

    if (info.data) {

        const quantity: Partial<NumberOfRepeats> = {}

        info.data.forEach(document => {
            quantity[document.data.name] = quantity[document.data.name] + 1 || 1
        })
        res.send(
            defaultSuccessMessage(`COUNT: ${JSON.stringify(quantity)}`)
        )
    } else {
        res.send(
            defaultFailMessage()
        )
    }

}