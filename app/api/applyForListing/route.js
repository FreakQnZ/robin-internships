// pages/api/applyToListing.js

import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';

export async function POST(request) {
  try {
    connectDB();

    const { userId, listingId, studentName, studentEmail, studentCollege } = await request.json();

    // Find the student in the database using the userId
    const student = await studentAll.findOne({ userId });

    // Find the startup by listingId
    const startup = await startupAll.findOne({
      'listings._id': listingId,
    });

    if (!startup) {
      return NextResponse.json({
        message: 'Listing not found',
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

    // Add the listingId and StartupId to the listings array of the student
    student.listings.push({
        listingId,
        StartupId: startup._id,
        listingName: startup.listing.lname, // Assuming the name is stored in 'lname'
        startupName: startup.name,
        status: 0,
    });

    // Save the updated student document
    await student.save();

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
