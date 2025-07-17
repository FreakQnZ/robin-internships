import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';

export async function POST(request) {
  try {
    connectDB();

    // Extract userId and listingId from the request body
    const { userId, listingId } = await request.json();

    // Find the startup with the given userId and listingId
    const startup = await startupAll.findOne({ userId, 'listings._id': listingId });

    if (!startup) {
      return NextResponse.error(new Error('Startup not found'), { status: 404 });
    }

    // Find the listing within the startup
    const listing = startup.listings.find(listing => listing._id.toString() === listingId);

    if (!listing) {
      return NextResponse.error(new Error('Listing not found'), { status: 404 });
    }

    // Extract student emails from acceptedApplicants array
    const studentSRN = listing.acceptedApplicants.map(applicant => applicant.student_college);

    return NextResponse.json({ studentSRN });
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Internal server error'), { status: 500 });
  }
}
