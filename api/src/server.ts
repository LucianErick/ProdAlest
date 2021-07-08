const express = require('express');
const app = express();
const routes = require('routes');
const cors = require('cors');

// Iniciando comunicação com o bd
export const admin = require("firebase-admin");
const serviceAccount = require("../src/database/prodalest-firebase-adminsdk-s2ve6-13a769c064.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333);