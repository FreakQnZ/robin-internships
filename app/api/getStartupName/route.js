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
    const { name } = startup;
    return NextResponse.json({
      data: name,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
