// Import necessary dependencies and models
import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId } = await request.json();
    console.log('[getIsActiveListingsForStartup] Request:', { userId });
    const startup = await prisma.startup.findUnique({
      where: { userId },
      include: { listings: { include: { applications: true } } },
    });
    console.log('[getIsActiveListingsForStartup] Found startup:', startup);
    if (!startup) {
      console.log('[getIsActiveListingsForStartup] Startup not found');
      return NextResponse.json({ message: 'Startup not found' }, { status: 404 });
    }
    console.log('[getIsActiveListingsForStartup] All listings:', startup.listings);
    startup.listings.forEach((listing, idx) => {
      console.log(`[getIsActiveListingsForStartup] Listing ${idx} (${listing.lname}): applications:`, listing.applications);
    });
    // Use isActive === true for boolean
    const activeListings = startup.listings.filter(listing => listing.isActive === true);
    console.log('[getIsActiveListingsForStartup] Active listings:', activeListings);
    return NextResponse.json({ listings: activeListings }, { status: 200 });
  } catch (error) {
    console.error('[getIsActiveListingsForStartup] Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
