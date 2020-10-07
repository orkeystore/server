import { MigrationInterface, QueryRunner } from 'typeorm';

export class baseTables1595845436493 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "accounts" (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "login" text NOT NULL,
        "password" text NOT NULL,
        "is_admin" boolean NOT NULL DEFAULT (0),
        CONSTRAINT "account_login_uniq" UNIQUE ("login")
      );
    `);
    await queryRunner.query(`
      CREATE TABLE "entries" (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "code" text UNIQUE NOT NULL,
        "description" text,
        "name" text NOT NULL,
        "is_system" boolean NOT NULL DEFAULT (0),
        "rotate_interval" integer,
        "account_id" integer NOT NULL,
        "archived_at" integer DEFAULT NULL,
        "access_code" string,
        CONSTRAINT "FK_entries_account" FOREIGN KEY ("account_id") REFERENCES "accounts" ("id")
        ON DELETE CASCADE ON UPDATE NO ACTION
      );
    `);
    await queryRunner.query(`
      CREATE TABLE "rsakeys" (
        "kid" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "kty" text NOT NULL,
        "alg" text NOT NULL,
        "e" text NOT NULL,
        "n" text NOT NULL,
        "d" text NOT NULL,
        "p" text NOT NULL,
        "q" text NOT NULL,
        "dp" text NOT NULL,
        "dq" text NOT NULL,
        "qi" text NOT NULL,
        "expires_at" integer,
        "activates_at" integer NOT NULL,
        "entry_id" integer NOT NULL,
        CONSTRAINT "FK_rsakeys_entries" FOREIGN KEY ("entry_id") REFERENCES "entries" ("id")
        ON DELETE CASCADE ON UPDATE NO ACTION
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "repos" (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "name" text NOT NULL,
        "code" text UNIQUE,
        "description" text,
        "account_id" integer NOT NULL,
        "access_code" string NOT NULL,
        CONSTRAINT "FK_5dd1da384093530eb5c877f1601" FOREIGN KEY ("account_id")
        REFERENCES "accounts" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)
    `);

    await queryRunner.query(`
      CREATE TABLE "repos_x_entries" (
        "repo_id" integer NOT NULL,
        "entry_id" integer NOT NULL,
        CONSTRAINT "FK_60ebad3e364d8e6bef7d1738130" FOREIGN KEY ("repo_id")
        REFERENCES "repos" ("id") ON DELETE CASCADE ON UPDATE NO ACTION,
        CONSTRAINT "FK_2c1e7cf55ad481c300b6c4820a8" FOREIGN KEY ("entry_id")
        REFERENCES "entries" ("id") ON DELETE CASCADE ON UPDATE NO ACTION,
        PRIMARY KEY ("repo_id", "entry_id"))
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS 'rsakeys';`);
    await queryRunner.query(`DROP TABLE IF EXISTS 'entries';`);
    await queryRunner.query(`DROP TABLE IF EXISTS 'accounts';`);
  }
}
