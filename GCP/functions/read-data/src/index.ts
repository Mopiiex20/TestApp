import { HttpFunction } from '@google-cloud/functions-framework';
import { Firestore } from '@google-cloud/firestore'

export const readData: HttpFunction = async (request, response) => {
    const firestore = new Firestore({ databaseId: '(default)' });

    const dataSnapshot = await (await firestore.collection('initial').get())

    const data: FirebaseFirestore.DocumentData = []
    dataSnapshot.forEach(element => data.push(element.data()))
    response.status(200).send({ data });
}