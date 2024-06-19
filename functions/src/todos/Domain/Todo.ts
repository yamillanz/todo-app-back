/* eslint-disable require-jsdoc */
export interface Todo {
  uuid: string;
  title: string;
  description: string;
  createdAt?: Date;
  completed: boolean;
}
