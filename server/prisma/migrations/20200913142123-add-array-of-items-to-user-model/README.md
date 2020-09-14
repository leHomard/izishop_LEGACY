# Migration `20200913142123-add-array-of-items-to-user-model`

This migration has been generated at 9/13/2020, 2:21:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "public"."Item_id"

ALTER TABLE "public"."Item" ALTER COLUMN "id" DROP DEFAULT;

ALTER TABLE "public"."User" ALTER COLUMN "id" DROP DEFAULT;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200906212432-first-migration..20200913142123-add-array-of-items-to-user-model
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 // Enums
 enum Role {
@@ -40,24 +40,26 @@
 }
 // Models
 model User {
-  id               String   @default(cuid()) @id
-  email            String   @unique
+  id               String    @default(cuid()) @id
+  email            String    @unique
   firstname        String?
   lastname         String?
   password         String
-  username         String?  @unique
-  token            String?  @unique
-  tempToken        String?  @unique
+  username         String?   @unique
+  token            String?   @unique
+  tempToken        String?   @unique
   resetTokenExpiry Float?
   profilePicture   String?
   // location         Location @relation(fields: [id], references: [id])
-  items            Item?
-  role             Role     @default(USER)
-  isVerified       Boolean  @default(value: false)
-  createdAt        DateTime @default(now())
-  updatedAt        DateTime @default(now())
+  items            Item[]
+  role             Role      @default(USER)
+  isVerified       Boolean   @default(value: false)
+  createdAt        DateTime  @default(now())
+  updatedAt        DateTime  @default(now())
+  Location         Location? @relation(fields: [locationId], references: [id])
+  locationId       String?
 }
 model Item {
   id          String     @default(cuid()) @id
@@ -65,24 +67,24 @@
   description String
   images      String[]
   thumbnail   String
   price       Float
-  user        User        @relation(fields: [id], references: [id])
-  condition   Condition   @default(NEW)
-  type        Type        @default(CLOTHES)
-  categories  Category    @default(MEN)
+  user        User       @relation(fields: [id], references: [id])
+  condition   Condition  @default(NEW)
+  type        Type       @default(CLOTHES)
+  categories  Category   @default(MEN)
   size        String
   color       String
   brand       String
   nbViews     Int?
   nbLiked     Int?
-  parcelType  ParcelType  @default(SMALL)
-  createdAt   DateTime    @default(now())
-  updatedAt   DateTime    @default(now())
+  parcelType  ParcelType @default(SMALL)
+  createdAt   DateTime   @default(now())
+  updatedAt   DateTime   @default(now())
 }
 model Location {
-  id         String  @default(cuid()) @id
+  id         String   @default(cuid()) @id
   number     Int
   street     String
   city       String
   country    String
```


