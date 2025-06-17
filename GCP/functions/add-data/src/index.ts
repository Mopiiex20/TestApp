import { HttpFunction } from '@google-cloud/functions-framework';
import { Firestore } from '@google-cloud/firestore'

export const addData: HttpFunction = async (request, response) => {
    if (!request.body.data) {
        response.status(401).send('Not enough data provided')
    }
    const { data } = request.body
    const firestore = new Firestore({ databaseId: '(default)' });

    const result = await firestore.collection('initial').add({
        data
    })

    response.status(200).send({ id: result.id });
}