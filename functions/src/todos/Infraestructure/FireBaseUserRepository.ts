/* eslint-disable require-jsdoc */

import { FirebaseConfigFactory } from '../../shared/FirebaseConfigFactory';
import { UserRepository } from '../Domain/UserRepository';
import { User } from '../Domain/User';

export class FireBaseUserRepository implements UserRepository {
  private db: FirebaseFirestore.Firestore;

  constructor() {
    this.db = FirebaseConfigFactory.create().firestore();
  }

  async getOne(idUser: string): Promise<User> {
    // const doc = await this.db.collection('user').doc(idUser).get();
    const querySnapshot = await this.db.collection('user').where('email', '==', idUser).get();
    const docRef = querySnapshot.docs[0]?.ref;
    const doc = await docRef?.get();
    if (!doc.exists) {
      throw new Error('No such document!');
    } else {
      return doc.data() as User;
    }
  }

  async getAll(): Promise<User[]> {
    const snapshot = await this.db.collection('user').get();
    return snapshot.docs.map((doc) => doc.data() as User);
  }

  async save(user: User): Promise<User> {
    const querySnapshot = await this.db.collection('user').where('uuid', '==', user.uuid).get();
    const docRef = querySnapshot.docs[0]?.ref;
    const doc = await docRef?.get();
    if (doc && doc.exists) {
      // await docRef.update(Object.assign({}, user) as { [x: string]: any });
      await docRef.update(user.toPrimitivies());
    } else {
      await this.db.collection('user').add(user.toPrimitivies());
      // todo.uuid = newDocRef.id;
    }
    return user;
  }
}
