import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';
import { studentAll } from '@/app/utils/database/models/student/studentAll';


export async function POST(request) {
  try {
    connectDB();

    const { userId } = await request.json();

    const student = await studentAll.findOne({ userId });
    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    let finalListings = [];

    const startups = await startupAll.find();
    for (const startup of startups) {
      for (const listing of startup.listings) {
        const exists = student.listings.some(
          studentListing => studentListing.listingId === listing._id.toString()
        );

        if (!exists) {
          const listingWithStartupDetails = {
            ...listing.toObject(),
            startupName: startup.name,
            startupId: startup.userId,
          };
          finalListings.push(listingWithStartupDetails);
        }
      }
    }

    return NextResponse.json(finalListings, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
