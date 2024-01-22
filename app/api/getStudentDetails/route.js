import { NextResponse } from 'next/server';
import { userAll } from '../../utils/database/models/allusers/userall';
import { studentAll } from '@/app/utils/database/models/student/studentAll';
import { connectDB } from '@/app/utils/database/connect';

export async function GET(request) {
  try {
    connectDB();

    await userAll.create({
      userId,
      role: 'student',
    });

    
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
