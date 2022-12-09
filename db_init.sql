CREATE USER admin;

CREATE DATABASE github_cli;
GRANT ALL PRIVILGES ON DATABASE github_cli TO admin;

CREATE TABLE "public"."user" ("id" serial NOT NULL,"VARCHAR" varchar, PRIMARY KEY ("id"));

ALTER TABLE "public"."user"
ADD COLUMN "languages" jsonb;

ALTER TABLE "public"."user"
ADD COLUMN "location" varchar;

ALTER TABLE "public"."user"
ADD COLUMN "name" varchar NOT NULL;

ALTER TABLE "public"."user" ALTER COLUMN "username" SET NOT NULL;

ALTER TABLE "public"."user"
ADD COLUMN "username" varchar;
