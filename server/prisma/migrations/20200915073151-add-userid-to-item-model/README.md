# Migration `20200915073151-add-userid-to-item-model`

This migration has been generated at 9/15/2020, 7:31:51 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_id_fkey"

ALTER TABLE "public"."Item" ADD COLUMN "userId" text   ;

ALTER TABLE "public"."Item" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200913142123-add-array-of-items-to-user-model..20200915073151-add-userid-to-item-model
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
@@ -67,9 +67,10 @@
   description String
   images      String[]
   thumbnail   String
   price       Float
-  user        User       @relation(fields: [id], references: [id])
+  user        User?      @relation(fields: [userId], references: [id])
+  userId      String?
   condition   Condition  @default(NEW)
   type        Type       @default(CLOTHES)
   categories  Category   @default(MEN)
   size        String
```


