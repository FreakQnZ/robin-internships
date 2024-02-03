// Import necessary dependencies and models
import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';

export async function POST(request) {
  try {
    // Connect to the database
    connectDB();

    // Get the userId from the request body
    const { userId } = await request.json();

    // Find the startup in the database using the userId
    const startup = await startupAll.findOne({ userId });
    if (!startup) {
      return NextResponse.error(new Error('Startup not found'), { status: 404 });
    }

    // Filter the listings where isActive is 1
    const activeListings = startup.listings.filter(listing => listing.isActive === 1);

    // Return the active listings
    return NextResponse.json(activeListings, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Internal Server Error'), { status: 500 });
  }
}
