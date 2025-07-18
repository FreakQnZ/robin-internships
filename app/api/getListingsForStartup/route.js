import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId } = await request.json();
    console.log('[getListingsForStartup] Request:', { userId });
    const startup = await prisma.startup.findUnique({
      where: { userId },
      include: {
        listings: {
          include: {
            applications: true,
          },
        },
      },
    });
    console.log('[getListingsForStartup] Found startup:', startup);
    if (!startup) {
      console.log('[getListingsForStartup] Startup not found');
      return NextResponse.json({ message: 'Startup not found', success: false });
    }
    console.log('[getListingsForStartup] Listings:', startup.listings);
    return NextResponse.json({ data: startup.listings, success: true });
  } catch (error) {
    console.error('[getListingsForStartup] Error:', error);
    return NextResponse.json({ message: error.message, success: false });
  }
}
// FRONTEND: Each listing now has an 'applications' array. Filter by status (PENDING, ACCEPTED, REJECTED) as needed.