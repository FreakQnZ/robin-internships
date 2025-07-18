import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId, resume } = await request.json();
    const student = await prisma.student.update({
      where: { userId },
      data: { resume },
    });
    return NextResponse.json({
      message: 'Student resume stored successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
