/* eslint-disable require-jsdoc */
export class Todo {
  uuid: string;
  title: string;
  description: string;
  createdAt?: Date;
  completed: boolean;

  constructor(uuid: string, title: string, description: string, completed: boolean, createdAt: Date = new Date()) {
    this.uuid = uuid;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = createdAt;
  }

  toPrimitivies() {
    return {
      uuid: this.uuid,
      title: this.title,
      description: this.description,
      completed: this.completed,
      createdAt: this.createdAt,
    };
  }

  // fromPrimitivies() : Todo{
  //   return ne
  // }
}
