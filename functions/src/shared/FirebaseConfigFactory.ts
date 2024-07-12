/* eslint-disable require-jsdoc */
// import * as admin from 'firebase-admin';

// import * as serviceAccount from '../config/todo_app.json';
// export class FirebaseConfigFactory {
//   static create() {
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
//       databaseURL: process.env.FIREBASE_DATABASE_URL,
//     });

//     return admin;
//   }
// }

import * as admin from 'firebase-admin';
import * as serviceAccount from '../config/todo_app.json';

import * as admin from 'firebase-admin';
import * as serviceAccount from '../account/todo_app.json';

export class FirebaseConfigFactory {
  private static instance: admin.app.App | null = null;

  static create() {
    if (!FirebaseConfigFactory.instance) {
      FirebaseConfigFactory.instance = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
      });
    }

    return FirebaseConfigFactory.instance;
  }
}
