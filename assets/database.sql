CREATE TABLE "account" (
  "id_account" SERIAL PRIMARY KEY,
  "username" TEXT UNIQUE NOT NULL,
  "password" TEXT NOT NULL
);

CREATE TABLE "wish_status" (
  "id_wish_status" SERIAL PRIMARY KEY,
  "code" TEXT NOT NULL,
  "description" TEXT NOT NULL
);

CREATE TABLE "wishlist" (
  "id_wishlist" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "date_added" TIMESTAMP NOT NULL,
  "account" INTEGER NOT NULL
);

CREATE INDEX "idx_wishlist__account" ON "wishlist" ("account");

ALTER TABLE "wishlist" ADD CONSTRAINT "fk_wishlist__account" FOREIGN KEY ("account") REFERENCES "account" ("id_account");

CREATE TABLE "wish" (
  "id_wish" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "link" TEXT,
  "date_added" TIMESTAMP NOT NULL,
  "price" DOUBLE PRECISION,
  "joy_ratio" INTEGER NOT NULL,
  "wishlist" INTEGER NOT NULL,
  "wish_status" INTEGER,
  "giver" INTEGER
);

CREATE INDEX "idx_wish__giver" ON "wish" ("giver");

CREATE INDEX "idx_wish__wish_status" ON "wish" ("wish_status");

CREATE INDEX "idx_wish__wishlist" ON "wish" ("wishlist");

ALTER TABLE "wish" ADD CONSTRAINT "fk_wish__giver" FOREIGN KEY ("giver") REFERENCES "account" ("id_account");

ALTER TABLE "wish" ADD CONSTRAINT "fk_wish__wish_status" FOREIGN KEY ("wish_status") REFERENCES "wish_status" ("id_wish_status");

ALTER TABLE "wish" ADD CONSTRAINT "fk_wish__wishlist" FOREIGN KEY ("wishlist") REFERENCES "wishlist" ("id_wishlist")

INSERT INTO wish_status(
            id_wish_status, code, description)
    VALUES (1, 'PEN', 'Pending');

