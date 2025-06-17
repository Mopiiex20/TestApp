import { chooseName } from "../helpers/chooseName"
import { GetDataResponse, DocType } from "../types/GCPresponse"



export const getData = async () => {
    const response: GetDataResponse<DocType> = await fetch("https://us-central1-testapp-463218.cloudfunctions.net/read-data", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

    }).then(res => res.json())
    return response
}