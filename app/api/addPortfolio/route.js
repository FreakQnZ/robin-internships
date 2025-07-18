import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId, portfolio } = await request.json();
    const student = await prisma.student.update({
      where: { userId },
      data: { portfolio },
    });
    return NextResponse.json({
      message: 'Student portfolio stored successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
