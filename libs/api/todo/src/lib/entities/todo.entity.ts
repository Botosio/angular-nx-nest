import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { randomUUID } from 'crypto';

@Entity()
export class Todo {
	@PrimaryKey({ columnType: 'uuid' })
	id: string = randomUUID();

	@Property()
	message: string;

	@Property({ nullable: true })
	done?: boolean;

  // ? what if we wanted to name it something else than what is in the DB.
  // https://mikro-orm.io/docs/usage-with-nestjs#serialization-caveat

  constructor(message:string) {
    this.message = message;
  }
}
