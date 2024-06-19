/* eslint-disable require-jsdoc */

import { Todo } from '../Domain/Todo';
import { TodoRepository } from '../Domain/TodoRespository';
import { FirebaseConfigFactory } from '../../shared/FirebaseConfigFactory';

export class FireBaseTodoRepository implements TodoRepository {
  private db: FirebaseFirestore.Firestore;

  constructor() {
    this.db = FirebaseConfigFactory.create().firestore();
  }

  async getOne(idTodo: string): Promise<Todo> {
    const doc = await this.db.collection('todo').doc(idTodo).get();
    if (!doc.exists) {
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
    const docRef = await this.db.collection('todo').add(todo);
    return { ...todo, uuid: docRef.id };
  }
}
