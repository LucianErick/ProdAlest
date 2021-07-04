import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

export const admin = require('firebase-admin');
const serviceAccount = require('./database/prodalest-firebase-adminsdk-s2ve6-13a769c064.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

export const db = admin.firestore();

app.listen(3333, () => {
    console.log("The server is running on port 3333!")
})