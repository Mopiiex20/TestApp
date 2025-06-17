import { defaultSuccessMessage, defaultFailMessage } from "../services/defaultResponses"
import { postData } from "../services/post-data"

export default async (_, res) => {
    const info = await postData()
    if (info.id) {
        res.send(
            defaultSuccessMessage(`New Document ID: ${info.id}`)
        )
    } else {
        res.send(
            defaultFailMessage()
        )
    }

}