import { Migration } from '@mikro-orm/migrations';

export class Migration20220421115213 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "feature_flag" ("id" uuid not null, "title" varchar(255) not null, "created_on" jsonb not null, "updated_on" jsonb not null, "active" boolean not null);');
    this.addSql('alter table "feature_flag" add constraint "feature_flag_pkey" primary key ("id");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "feature_flag" cascade;');
  }

}
