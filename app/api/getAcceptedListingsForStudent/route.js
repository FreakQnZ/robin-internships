// Import necessary dependencies and models
import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId } = await request.json();
    // Find all accepted applications for this student
    const applications = await prisma.application.findMany({
      where: {
        student_id: userId,
        status: 'ACCEPTED',
      },
      include: {
        listing: true,
      },
    });
    // Return the associated listings
    const acceptedListings = applications.map(app => app.listing);
    return NextResponse.json(acceptedListings, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
// FRONTEND: Use the returned array of listings for accepted applications.
