import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const {
      userId,
      lname,
      domain,
      stipend,
      duration,
      description,
      requirements,
      email,
      internsRequired,
    } = await request.json();

    // Find the startup in the database using the userId
    const startup = await prisma.startup.findUnique({ where: { userId } });
    if (!startup) {
      return NextResponse.json({
        message: 'Startup not found',
        success: false,
      });
    }

    // Create a new listing associated with the startup
    await prisma.listing.create({
      data: {
        lname,
        domain,
        stipend: parseInt(stipend) || 0,
        duration,
        description,
        requirements,
        email,
        internsRequired: parseInt(internsRequired) || 0,
        startupId: startup.id,
        // isActive and applicants default
      },
    });

    return NextResponse.json({
      message: 'Listing created successfully',
      success: true,
    });
  } catch (error) {
    console.error('Error in /api/createListing:', error);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
