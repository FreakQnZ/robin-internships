import { NextResponse } from 'next/server';
import { studentAll } from '@/app/utils/database/models/student/studentAll';
import { connectDB } from '@/app/utils/database/connect';

export async function POST(request) {
  try {
    connectDB();

    const { userId, resume } = await request.json();

    // Find the student in the database using the userId
    const student = await studentAll.findOne({ userId });

    if (!student) {
      // If student not found, return an appropriate response
      return NextResponse.json({
        message: 'Student not found',
        success: false,
      });
    }

    // Update the student's resume field
    student.resume = resume;

    // Save the updated student document
    await student.save();

    // Return a success response
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
