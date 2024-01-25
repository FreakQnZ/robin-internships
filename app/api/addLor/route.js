import { NextResponse } from 'next/server';
import { studentAll } from '@/app/utils/database/models/student/studentAll';
import { connectDB } from '@/app/utils/database/connect';

export async function POST(request) {
  try {
    connectDB();

    const { userId, Lor } = await request.json();

    // Find the student in the database using the userId
    const student = await studentAll.findOne({ userId });

    if (!student) {
      // If student not found, return an appropriate response
      return NextResponse.json({
        message: 'Student not found',
        success: false,
      });
    }

    // Add the new Lor to the student's Lor array
    student.Lor.push(Lor);

    // Save the updated student document
    await student.save();

    // Return a success response
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
