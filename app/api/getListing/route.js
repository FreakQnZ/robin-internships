import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';

export async function GET(request) {
  try {
    connectDB();

    // Fetch all records from startupAll
    const allStartups = await startupAll.find();

    // Iterate through each record and extract listings for startups with non-empty listings
    const allListings = allStartups
      .filter((startup) => startup.listings.length > 0) // Only include startups with non-empty listings
      .map((startup) => {
        const { userId, name, email, desc, listings } = startup;

        // Extract listings array from each startup
        const startupListings = listings.map((listing) => {
          const { lname, domain, stipend, duration, description, applicants } = listing;

          // You can customize the structure as needed
          return {
            lname,
            domain,
            stipend,
            duration,
            description,
            applicants,
          };
        });

        return {
          userId,
          name,
          email,
          desc,
          listings: startupListings,
        };
      });

    return NextResponse.json({
      data: allListings,
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