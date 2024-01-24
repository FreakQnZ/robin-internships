import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';

export async function POST(request) {
  try {
    connectDB();

    // Parse the request body to get the listing details
    const {
      userId,
      lname,
      domain,
      stipend,
      duration,
      description,
      requirements,
      email,
      internsRequired,
    } = await request.json();

    // Find the startup in the database using the userId
    const startup = await startupAll.findOne({ userId });

    if (!startup) {
      // If startup not found, return an appropriate response
      return NextResponse.json({
        message: 'Startup not found',
        success: false,
      });
    }

    // Create a new listing
    const newListing = {
      lname,
      domain,
      stipend,
      duration,
      description,
      requirements,
      email,
      internsRequired,
      applicants: [], // Initialize the applicants array for the new listing
    };

    // Add the new listing to the listings array of the startup
    startup.listings.push(newListing);

    // Save the updated startup document
    await startup.save();

    return NextResponse.json({
      message: 'Listing created successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
