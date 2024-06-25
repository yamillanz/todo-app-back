/* eslint-disable require-jsdoc */
export class User {
  uuid: string;
  email: string;
  createdAt?: string;

  constructor(uuid: string, email: string, createdAt: string = new Date().toISOString()) {
    this.uuid = uuid;
    this.email = email;
    this.createdAt = createdAt;
  }

  toPrimitivies() {
    return {
      uuid: this.uuid,
      email: this.email,
      createdAt: this.createdAt,
    };
  }
}
