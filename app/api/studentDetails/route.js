import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId } = await request.json();
    console.log('this is the userId:', userId);
    const student = await prisma.student.findUnique({ where: { userId } });
    console.log('this is the student:', student);
    if (!student) {
      return NextResponse.json({
        message: 'Student not found',
        success: false,
      });
    }
        // Convert BigInt to string for JSON serialization
    const studentData = {
      ...student,
      phoneNumber: student.phoneNumber
    };
    
    return NextResponse.json({
      message: 'Student details retrieved successfully',
      success: true,
      data: {
        student: studentData,
      },
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
