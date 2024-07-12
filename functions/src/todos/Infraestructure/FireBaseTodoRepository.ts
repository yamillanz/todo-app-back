/* eslint-disable require-jsdoc */

import { Todo } from '../Domain/Todo';
import { TodoRepository } from '../Domain/TodoRespository';
import { FirebaseConfigFactory } from '../../shared/FirebaseConfigFactory';

export class FireBaseTodoRepository implements TodoRepository {
  private db: FirebaseFirestore.Firestore;

  constructor() {
    this.db = FirebaseConfigFactory.create().firestore();
  }
  async getAllByUser(idUser: string): Promise<Todo[]> {
    const snapshot = await this.db
      .collection('todo')
      .where('userId', '==', idUser)
      .where('completed', '==', false)
      .get();
    return snapshot.docs.map((doc) => doc.data() as Todo);
  }

  async getAllByUserHistory(idUser: string): Promise<Todo[]> {
    // const snapshot = await this.db.collection('todo').where('userId', '==', idUser).get();
    const snapshot = await this.db
      .collection('todo')
      .where('userId', '==', idUser)
      .where('completed', '==', true)
      .get();
    return snapshot.docs.map((doc) => doc.data() as Todo);
  }

  async getOne(idTodo: string): Promise<Todo> {
    const doc = await this.db.collection('todo').doc(idTodo).get();
    if (!doc?.exists) {
      throw new Error('No such document!');
    } else {
      return doc.data() as Todo;
    }
  }

  async getAll(): Promise<Todo[]> {
    const snapshot = await this.db.collection('todo').get();
    return snapshot.docs.map((doc) => doc.data() as Todo);
  }

  async save(todo: Todo): Promise<Todo> {
    const querySnapshot = await this.db.collection('todo').where('uuid', '==', todo.uuid).get();
    const docRef = querySnapshot.docs[0]?.ref;
    const doc = await docRef?.get();
    if (doc && doc.exists) {
      await docRef.update(todo.toPrimitivies());
    } else {
      await this.db.collection('todo').add(todo.toPrimitivies());
      // todo.uuid = newDocRef.id;
    }
    return todo;
  }

  async delete(idTodo: string): Promise<void> {
    const querySnapshot = await this.db.collection('todo').where('uuid', '==', idTodo).get();
    querySnapshot.forEach(async (doc) => {
      await doc.ref.delete();
    });
  }
}
