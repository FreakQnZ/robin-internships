import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';

export async function GET(request) {
  try {
    connectDB();

    // Get the userId from the query parameters
    const { userId } = request.query;

    // Find the startup in the database using the userId
    const startup = await startupAll.findOne({ userId });

    if (!startup) {
      // If startup not found, return an appropriate response
      return NextResponse.json({
        message: 'Startup not found',
        success: false,
      });
    }

    // Extract the listings array from the startup
    const { listings } = startup;

    return NextResponse.json({
      data: listings,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
