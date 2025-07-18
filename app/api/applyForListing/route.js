import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

// POST: Student applies for a listing
export async function POST(request) {
  try {
    const { userId, listingId, studentName, studentPhoneNumber, studentEmail, studentCollege, coverLetter } = await request.json();
    console.log('[applyForListing] Request:', { userId, listingId, studentName, studentPhoneNumber, studentEmail, studentCollege, coverLetter });

    // Find the student in the database using the userId
    const student = await prisma.student.findUnique({ where: { userId } });
    console.log('[applyForListing] Found student:', student);
    if (!student) {
      console.log('[applyForListing] Student not found');
      return NextResponse.json({ message: 'Student not found', success: false });
    }
    // Find the listing
    const listing = await prisma.listing.findUnique({ where: { id: Number(listingId) } });
    console.log('[applyForListing] Found listing:', listing);
    if (!listing) {
      console.log('[applyForListing] Listing not found');
      return NextResponse.json({ message: 'Listing not found', success: false });
    }
    // Check for duplicate application
    const existing = await prisma.application.findUnique({
      where: {
        student_id_listingId: {
          student_id: userId,
          listingId: listing.id,
        },
      },
    });
    console.log('[applyForListing] Existing application:', existing);
    if (existing) {
      console.log('[applyForListing] Duplicate application');
      return NextResponse.json({ message: 'You have already applied for this listing', success: false });
    }
    // Create the application with status PENDING
    const application = await prisma.application.create({
      data: {
        student_id: userId,
        student_name: studentName,
        student_email: studentEmail,
        student_phone: studentPhoneNumber,
        student_college: studentCollege,
        status: 'PENDING',
        coverLetter: coverLetter || null,
        listingId: listing.id,
        studentDbId: student.id,
      },
    });
    console.log('[applyForListing] Created application:', application);
    return NextResponse.json({ message: 'Application submitted successfully', success: true, applicationId: application.id });
  } catch (error) {
    console.error('[applyForListing] Error:', error);
    return NextResponse.json({ message: error.message, success: false });
  }
}

// ---
// FRONTEND CHANGES NEEDED:
// - Send { userId, listingId, studentName, studentPhoneNumber, studentEmail, studentCollege, coverLetter? } in the POST body.
// - On success, check for { success: true, applicationId } in the response.
// - On duplicate, check for { success: false, message: 'You have already applied for this listing' }.