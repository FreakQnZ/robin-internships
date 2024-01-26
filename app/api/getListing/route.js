import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';
import { studentAll } from '@/app/utils/database/models/student/studentAll';


export async function POST(request) {
  try {
    connectDB();

    const { userId } = await request.json();

    // Fetch student record
    const student = await studentAll.findOne({ userId });
    if (!student) {
      return NextResponse.error(new Error('Student not found'), { status: 404 });
    }

    // Array to store final listings
    let finalListings = [];

    // Iterate through each startup
    const startups = await startupAll.find();
    for (const startup of startups) {
      for (const listing of startup.listings) {
        // Check if the listing exists in the student's listings array
        const exists = student.listings.some(studentListing => studentListing.listingId === listing._id.toString());

        // If the listing doesn't exist in the student's listings array, add it to the final listings
        if (!exists) {
          // Add the name of the startup to the listing object
          const listingWithStartupDetails = {
            ...listing.toObject(),
            startupName: startup.name,  // Assuming the name of the startup is stored in 'name' field
            startupId : startup.userId
          };
          finalListings.push(listingWithStartupDetails);
        }
      }
    }

    // Return the final array of listings
    return NextResponse.json(finalListings, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Internal Server Error'), { status: 500 });
  }
}
