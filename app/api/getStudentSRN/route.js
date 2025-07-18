import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { listingId } = await request.json();
    const applications = await prisma.application.findMany({
      where: {
        listingId: Number(listingId),
        status: 'ACCEPTED',
      },
    });
    const studentSRN = applications.map(app => app.student_college);
    return NextResponse.json({ studentSRN });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
// FRONTEND: Use the returned studentSRN array.
