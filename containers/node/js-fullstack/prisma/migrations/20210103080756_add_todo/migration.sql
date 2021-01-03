-- CreateTable
CREATE TABLE "ToDo" (
"id" SERIAL,
    "body" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ToDo" ADD FOREIGN KEY("userId")REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
