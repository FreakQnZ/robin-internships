
import { NextResponse } from 'next/server'
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId } = await request.json();
    const curr_user = await prisma.userAll.findUnique({ where: { userId } });
    if (!curr_user) {
      return NextResponse.json({
        message: "User not found",
        success: false
      });
    }
    return NextResponse.json({
      message: "User verified",
      success: true,
      role: curr_user.role
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false
    });
  }
}