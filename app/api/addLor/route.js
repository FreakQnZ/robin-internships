import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId, Lor } = await request.json();
    const student = await prisma.student.findUnique({ where: { userId } });
    if (!student) {
      return NextResponse.json({
        message: 'Student not found',
        success: false,
      });
    }
    await prisma.lor.create({
      data: {
        lorLink: Lor,
        studentId: student.id,
      },
    });
    return NextResponse.json({
      message: 'Student Lor stored successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
