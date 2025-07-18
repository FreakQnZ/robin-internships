import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId, name, desc, email, domain, phno, insta, linkedin, imgURL } = await request.json();

    await prisma.userAll.create({
      data: {
        userId,
        role: 'startup',
      },
    });

    await prisma.startup.create({
      data: {
        userId,
        name,
        email,
        desc,
        domain,
        phno,
        insta,
        linkedin,
        imgURL,
        // listings will be empty by default
      },
    });

    return NextResponse.json({
      message: 'User and startup added successfully',
      success: true,
    });
  } catch (error) {
    console.error('Error in /api/newStartup:', error);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
