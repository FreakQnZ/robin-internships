// Import necessary dependencies and models
import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { studentAll } from '@/app/utils/database/models/student/studentAll';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';

export async function POST(request) {
  try {
    connectDB();

    // Destructure userId from the request body
    const { userId } = await request.json();

    // Fetch student record
    const student = await studentAll.findOne({ userId });
    if (!student) {
      return NextResponse.error(new Error('Student not found'), { status: 404 });
    }

    // Filter listings where status is 1
    const filteredListings = student.listings.filter(listing => listing.status === 1);

    // Array to store final listings
    let finalListings = [];

    // Iterate through each filtered listing
    for (const listing of filteredListings) {
      // Find the startup that owns this listing
      const startup = await startupAll.findOne({ userId: listing.startupId });

      // If the startup is found, find the specific listing within its listings
      if (startup) {
        const startupListing = startup.listings.find(startupListing => startupListing._id.toString() === listing.listingId);

        // If the listing is found within the startup's listings, add it to the final array
        if (startupListing) {
          // Construct the listing object without the applicants, acceptedApplicants, and rejectedApplicants fields
          const listingWithStartupDetails = {
            ...startupListing.toObject(),
            startupName: startup.name, // Assuming the name of the startup is stored in 'name' field
            startupId: startup.userId
          };
          delete listingWithStartupDetails.applicants;
          delete listingWithStartupDetails.acceptedApplicants;
          delete listingWithStartupDetails.rejectedApplicants;

          // Add the listing to the final array
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
