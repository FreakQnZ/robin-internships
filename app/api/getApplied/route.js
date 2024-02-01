import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { studentAll } from '@/app/utils/database/models/student/studentAll';

export async function POST(request) {
  try {
    connectDB();

    // Get the userId from the query parameters
    const { userId } = await request.json();

    // Find the student in the database using the userId
    const student = await studentAll.findOne({ userId });

    if (!student) {
      // If student not found, return an appropriate response
      return NextResponse.json({
        message: 'Student not found',
        success: false,
      });
    }

    const {listings} = student

    return NextResponse.json({
      data: listings,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
