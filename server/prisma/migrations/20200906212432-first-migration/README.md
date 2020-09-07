# Migration `20200906212432-first-migration`

This migration has been generated at 9/6/2020, 9:24:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

CREATE TYPE "Type" AS ENUM ('CLOTHES', 'SHOES', 'ACCESSORIES', 'DECORATION');

CREATE TYPE "Condition" AS ENUM ('NEW', 'VG_CONDITION', 'G_CONDITION');

CREATE TYPE "Category" AS ENUM ('WOMEN', 'MEN', 'CHILDREN', 'HOME');

CREATE TYPE "ParcelType" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_userId_fkey"

CREATE TABLE "public"."Location" (
"city" text  NOT NULL ,
"country" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"id" text  NOT NULL ,
"number" integer  NOT NULL ,
"postalCode" integer  NOT NULL ,
"street" text  NOT NULL ,
"updatedAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id"))

ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "content",
DROP COLUMN "published",
DROP COLUMN "userId",
ADD COLUMN "brand" text  NOT NULL ,
ADD COLUMN "categories" "Category" NOT NULL DEFAULT E'MEN',
ADD COLUMN "color" text  NOT NULL ,
ADD COLUMN "condition" "Condition" NOT NULL DEFAULT E'NEW',
ADD COLUMN "description" text  NOT NULL ,
ADD COLUMN "images" text []  ,
ADD COLUMN "nbLiked" integer   ,
ADD COLUMN "nbViews" integer   ,
ADD COLUMN "parcelType" "ParcelType" NOT NULL DEFAULT E'SMALL',
ADD COLUMN "price" Decimal(65,30)  NOT NULL ,
ADD COLUMN "size" text  NOT NULL ,
ADD COLUMN "thumbnail" text  NOT NULL ,
ADD COLUMN "type" "Type" NOT NULL DEFAULT E'CLOTHES',
ADD COLUMN "updatedAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" SET DATA TYPE text ,
ADD PRIMARY KEY ("id");

ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "name",
ADD COLUMN "createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "firstname" text   ,
ADD COLUMN "isVerified" boolean  NOT NULL DEFAULT false,
ADD COLUMN "lastname" text   ,
ADD COLUMN "locationId" text   ,
ADD COLUMN "password" text  NOT NULL ,
ADD COLUMN "profilePicture" text   ,
ADD COLUMN "resetTokenExpiry" Decimal(65,30)   ,
ADD COLUMN "role" "Role" NOT NULL DEFAULT E'USER',
ADD COLUMN "tempToken" text   ,
ADD COLUMN "token" text   ,
ADD COLUMN "updatedAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "username" text   ,
ALTER COLUMN "id" SET DATA TYPE text ,
ADD PRIMARY KEY ("id");

CREATE UNIQUE INDEX "Item_id" ON "public"."Item"("id")

CREATE UNIQUE INDEX "User.username" ON "public"."User"("username")

CREATE UNIQUE INDEX "User.token" ON "public"."User"("token")

CREATE UNIQUE INDEX "User.tempToken" ON "public"."User"("tempToken")

ALTER TABLE "public"."Item" ADD FOREIGN KEY ("id")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."User" ADD FOREIGN KEY ("locationId")REFERENCES "public"."Location"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER INDEX "public"."User_email_key" RENAME TO "User.email"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200906212432-first-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,93 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+// Enums
+enum Role {
+  ADMIN
+  USER
+}
+
+enum Type {
+  CLOTHES
+  SHOES
+  ACCESSORIES
+  DECORATION
+}
+
+enum Condition {
+  NEW
+  VG_CONDITION
+  G_CONDITION
+}
+
+enum Category {
+  WOMEN
+  MEN
+  CHILDREN
+  HOME
+}
+
+enum ParcelType {
+  SMALL
+  MEDIUM
+  LARGE
+}
+
+// Models
+model User {
+  id               String   @default(cuid()) @id
+  email            String   @unique
+  firstname        String?
+  lastname         String?
+  password         String
+  username         String?  @unique
+  token            String?  @unique
+  tempToken        String?  @unique
+  resetTokenExpiry Float?
+  profilePicture   String?
+  // location         Location @relation(fields: [id], references: [id])
+  items            Item?
+  role             Role     @default(USER)
+  isVerified       Boolean  @default(value: false)
+  createdAt        DateTime @default(now())
+  updatedAt        DateTime @default(now())
+}
+
+model Item {
+  id          String     @default(cuid()) @id
+  title       String
+  description String
+  images      String[]
+  thumbnail   String
+  price       Float
+  user        User        @relation(fields: [id], references: [id])
+  condition   Condition   @default(NEW)
+  type        Type        @default(CLOTHES)
+  categories  Category    @default(MEN)
+  size        String
+  color       String
+  brand       String
+  nbViews     Int?
+  nbLiked     Int?
+  parcelType  ParcelType  @default(SMALL)
+  createdAt   DateTime    @default(now())
+  updatedAt   DateTime    @default(now())
+}
+
+model Location {
+  id         String  @default(cuid()) @id
+  number     Int
+  street     String
+  city       String
+  country    String
+  postalCode Int
+  createdAt  DateTime @default(now())
+  updatedAt  DateTime @default(now())
+  User       User[]
+}
```


