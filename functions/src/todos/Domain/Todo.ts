/* eslint-disable require-jsdoc */
export class Todo {
  constructor(
    public uuid: string,
    public title: string,
    public description: string,
    public completed: boolean,
    public createdAt: string,
    public userId?: string,
    public completedAt?: string,
  ) {}

  toPrimitivies() {
    return {
      uuid: this.uuid,
      title: this.title,
      description: this.description,
      completed: this.completed,
      createdAt: this.createdAt,
      completedAt: this.completedAt,
      userId: this.userId,
    };
  }
}
