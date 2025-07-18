import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId } = await request.json();
    console.log('[getListing] Request:', { userId });
    const student = await prisma.student.findUnique({ where: { userId } });
    if (!student) {
      console.log('[getListing] Student not found');
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }
    // Find all applications for this student
    const applications = await prisma.application.findMany({
      where: { student_id: userId },
      select: { listingId: true },
    });
    const appliedListingIds = new Set(applications.map(app => app.listingId));
    console.log('[getListing] Applied listing IDs:', appliedListingIds);
    // Get all listings with startup info
    const startups = await prisma.startup.findMany({
      include: { listings: true },
    });
    let finalListings = [];
    for (const startup of startups) {
      for (const listing of startup.listings) {
        if (!appliedListingIds.has(listing.id)) {
          const listingWithStartupDetails = {
            ...listing,
            startupName: startup.name,
            startupId: startup.userId,
          };
          finalListings.push(listingWithStartupDetails);
        }
      }
    }
    console.log('[getListing] Final listings:', finalListings);
    return NextResponse.json(finalListings, { status: 200 });
  } catch (error) {
    console.error('[getListing] Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
