import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';

export async function GET(request) {
  try {
    connectDB();

    // Get the userId from the query parameters
    const { userId } = request.json();

    // Find the startup in the database using the userId
    const startup = await startupAll.findOne({ userId });

    if (!startup) {
      // If startup not found, return an appropriate response
      return NextResponse.json({
        message: 'Startup not found',
        success: false,
      });
    }

    // Extract the startup description
    const { desc } = startup;

    return NextResponse.json({
      data: {
        desc, // Include startup description
      },
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
