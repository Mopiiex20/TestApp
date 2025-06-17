import express from 'express';
import postDataRoute from './routes/post-data'
import getDataRoute from './routes/get-data'
import { getData } from './services/read-data';


const app = express();
const port = 3000;

app.get('/', async (_, res) => {
  const info = await getData()
  const dataToSend = info.data.map(document => document.data)
  res.send(
    { transformedData: dataToSend }
  )
});

app.get('/post-data', postDataRoute);

app.get('/get-data', getDataRoute);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


