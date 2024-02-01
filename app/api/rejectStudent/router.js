import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';
import { studentAll } from '@/app/utils/database/models/student/studentAll'; // Import the student model

export async function POST(request) {
  try {
    connectDB();

    // Extract data from the request body
    const { student_id, student_name, student_college, student_email, student_phoneNumber, listingId } = await request.json();

    // Find the startup with the given listingId
    const startup = await startupAll.findOne({ 'listings._id': listingId });

    console.log("This is the startup",startup)

    if (!startup) {
      return NextResponse.error(new Error('Startup not found'), { status: 404 });
    }

    // Find the listing within the startup
    const listing = startup.listings.find(listing => listing._id.toString() === listingId);

    console.log("This is the listing",listing)
    // Add the accepted applicant to the acceptedApplicants array
    listing.rejectedApplicants.push({
      student_id,
      student_name,
      student_college,
      student_email,
      student_phoneNumber
    });


    // Save the updated startup document
    await startup.save();

    // Update student's listing status
    const student = await studentAll.findOneAndUpdate(
      { userId: student_id, 'listings.listingId': listingId }, // Find the student by ID and the listing ID
      { $set: { 'listings.$.status': 2 } }, // Set the status of the specific listing to 1 (accepted)
      { new: true } // Return the updated document
    );

    if (!student) {
      return NextResponse.error(new Error('Student not found'), { status: 404 });
    }

    return NextResponse.json({ message: 'Student accepted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Internal server error'), { status: 500 });
  }
}
