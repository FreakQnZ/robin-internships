// pages/api/applyToListing.js

import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';
import { studentAll } from '@/app/utils/database/models/student/studentAll';

export async function POST(request) {
  try {
    connectDB();

    const { userId, startupId, listingId, studentName, studentEmail, studentCollege } = await request.json();

    // Find the student in the database using the userId
    const student = await studentAll.findOne({ userId });

    // Find the startup by userId
    const startup = await startupAll.findOne({ userId: startupId });

    if (!student || !startup) {
      return NextResponse.json({
        message: 'Student or startup not found',
        success: false,
      });
    }

    // Find the listing in the startup's listings array by listingId
    const listing = startup.listings.find((listing) => listing._id.toString() === listingId);

    if (!listing) {
      return NextResponse.json({
        message: 'Listing not found',
        success: false,
      });
    }

    // Create the applicant object
    const applicant = {
      student_id: userId,
      student_name: studentName,
      student_email: studentEmail,
      student_college: studentCollege,
    };

    // Push the applicant object to the listing's applicants array
    listing.applicants.push(applicant);

    // Save the updated startup
    await startup.save();

    // Check if the listing is already present in the student's listings array
    const isListingPresent = student.listings.some((studentListing) => studentListing.listingId === listingId);

    // If the listing is not present, add it to the student's listings array
    if (!isListingPresent) {
      student.listings.push({
        listingId,
        startupId: startup.userId,
        listingName: listing.lname, // Assuming the name is stored in 'lname'
        startupName: startup.name,
        status: 0,
      });

      // Save the updated student document
      await student.save();
    }

    return NextResponse.json({
      message: 'Application submitted successfully',
      success: true,
    });
  } catch (error) {
    console.error('Error:', error.message);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
