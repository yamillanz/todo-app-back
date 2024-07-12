/* eslint-disable require-jsdoc */
export class Todo {
  uuid: string;
  title: string;
  description: string;
  createdAt?: string;
  completed: boolean;
  userId?: string;

  constructor(uuid: string, title: string, description: string, completed: boolean, createdAt = '', userId = '') {
    this.uuid = uuid;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = !createdAt || createdAt === '' ? new Date().toISOString() : createdAt;
    this.userId = userId;
  }

  toPrimitivies() {
    return {
      uuid: this.uuid,
      title: this.title,
      description: this.description,
      completed: this.completed,
      createdAt: this.createdAt,
      userId: this.userId,
    };
  }
}
