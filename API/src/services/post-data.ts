import { chooseName } from "../helpers/chooseName"
import { PostDataResponse } from "../types/GCPresponse"



export const postData = async () => {
    const response: PostDataResponse = await fetch("https://us-central1-testapp-463218.cloudfunctions.net/add-data", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "data": {
                name: chooseName(),
                timestamp: new Date()
            },
        }),
    }).then(res => res.json())
    return response
}

