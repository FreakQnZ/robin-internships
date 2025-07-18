import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId } = await request.json();
    // Find all applications for this student (all statuses)
    const applications = await prisma.application.findMany({
      where: {
        student_id: userId,
      },
      include: {
        listing: true,
      },
    });
    // Return the associated listings with status
    const listingsWithStatus = applications.map(app => ({
      ...app.listing,
      status: app.status,
    }));
    return NextResponse.json({ data: listingsWithStatus, success: true });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
// FRONTEND: Show all listings in Application Status, using the status field for each.
