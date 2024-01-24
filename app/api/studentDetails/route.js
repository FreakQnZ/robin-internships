import { NextResponse } from 'next/server';
import { studentAll } from '@/app/utils/database/models/student/studentAll';
import { connectDB } from '@/app/utils/database/connect';

export async function POST(request) {
  try {

    connectDB();

    const  {userId}  = await request.json();

    // Find the student in the database using the userId
    const student = await studentAll.findOne({ userId });

    if (!student) {
      // If student not found, return an appropriate response
      return NextResponse.json({
        message: 'Student not found',
        success: false,
      });
    }

    // If student is found, return the details
    return NextResponse.json({
      message: 'Student details retrieved successfully',
      success: true,
      data: {
        student,
      },
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
