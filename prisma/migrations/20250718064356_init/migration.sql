-- CreateEnum
CREATE TYPE "Role" AS ENUM ('student', 'startup');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'WITHDRAWN');

-- CreateTable
CREATE TABLE "UserAll" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "UserAll_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "Domains" TEXT NOT NULL,
    "yearOfGraduation" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "resume" TEXT,
    "portfolio" TEXT,
    "imgURL" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lor" (
    "id" SERIAL NOT NULL,
    "lorLink" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentListing" (
    "id" SERIAL NOT NULL,
    "startupId" TEXT NOT NULL,
    "startupName" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "listingName" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "studentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StudentListing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Startup" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "phno" TEXT NOT NULL,
    "insta" TEXT,
    "linkedin" TEXT,
    "imgURL" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" SERIAL NOT NULL,
    "lname" TEXT NOT NULL,
    "domain" TEXT,
    "stipend" INTEGER NOT NULL DEFAULT 0,
    "duration" TEXT NOT NULL,
    "description" TEXT,
    "requirements" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "internsRequired" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "startupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "student_id" TEXT NOT NULL,
    "student_name" TEXT NOT NULL,
    "student_email" TEXT NOT NULL,
    "student_phone" TEXT NOT NULL,
    "student_college" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "coverLetter" TEXT,
    "listingId" INTEGER NOT NULL,
    "studentDbId" INTEGER,
    "appliedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAll_userId_key" ON "UserAll"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_userId_key" ON "Startup"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Startup_email_key" ON "Startup"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Application_student_id_listingId_key" ON "Application"("student_id", "listingId");

-- AddForeignKey
ALTER TABLE "Lor" ADD CONSTRAINT "Lor_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentListing" ADD CONSTRAINT "StudentListing_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_studentDbId_fkey" FOREIGN KEY ("studentDbId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
