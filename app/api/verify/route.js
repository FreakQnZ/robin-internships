
import { NextResponse } from 'next/server'
import { userAll } from '../../utils/database/models/allusers/userall';
import { connectDB } from '@/app/utils/database/connect';

export async function POST(request) {
  try {
    connectDB();
    const {userId} = await request.json()

    const curr_user = await userAll.findOne({ userId })
    if (!curr_user) {
      return NextResponse.json({
        message: "User not found",
        success: false
      })
    }

    return NextResponse.json({
      message: "User verified",
      success: true
    })
    
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false
    })
  }
}