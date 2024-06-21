import * as admin from 'firebase-admin';
/* eslint-disable require-jsdoc */

// apiKey: "AIzaSyAl_96zKawtX1mILmC2axYgTr_MksLDx5Y",
// authDomain: "todo-app-c9ea4.firebaseapp.com",
// projectId: "todo-app-c9ea4",
// storageBucket: "todo-app-c9ea4.appspot.com",
// messagingSenderId: "180845934620",
// appId: "1:180845934620:web:49ac1e377113ee8c82c7d9"

// const serviceAccount = require('../../config/todo_app.json');
import * as serviceAccount from '../config/todo_app.json';
export class FirebaseConfigFactory {
  static create() {
    // const serviceAccount = {
    //   projectId: process.env.FIREBASE_PROJECT_ID || 'todo-app-c9ea4',
    //   privateKey: 'AIzaSyAl_96zKawtX1mILmC2axYgTr_MksLDx5Y',
    //   clientEmail: 'yamil.w.lanz@gmail.com',
    // };

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    });

    return admin;
  }
}
