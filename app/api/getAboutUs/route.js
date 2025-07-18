import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { userId } = await request.json();
    const startup = await prisma.startup.findUnique({ where: { userId } });
    if (!startup) {
      return NextResponse.json({
        message: 'Startup not found',
        success: false,
      });
    }
    const { desc } = startup;
    return NextResponse.json({
      data: desc,
      success: true,
    });
  } catch (error) {
    console.error('Error in /api/getAboutUs:', error);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
