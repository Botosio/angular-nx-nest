import { Migration } from '@mikro-orm/migrations';

export class Migration20220325191438 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "todo" ("id" uuid not null, "message" varchar(255) not null, "done" boolean null);');
    this.addSql('alter table "todo" add constraint "todo_pkey" primary key ("id");');
  }

}
