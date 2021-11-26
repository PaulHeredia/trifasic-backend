import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import { routes } from "./router";
//==============Firebase Credenciales=======//
admin.initializeApp(functions.config().firebase);
//===========Firebase Base de Datos===========///
const db = admin.firestore();//BASE DE DATOS COLLECTIONS & DOCUMENTOS
db.settings({ignoreUndefinedProperties:true, timestampsInSnapshot:true});
//===========Servidor Express==========///
const server = express();
server.use(cors({origin:true}));
//=============Routes=====///
routes(server);
//=========Exportacion del servidor===========//
export {db};
export const api=functions.https.onRequest(server);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
