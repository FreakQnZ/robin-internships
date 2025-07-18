import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { student_id, listingId } = await request.json();
    console.log('[acceptStudent] Request:', { student_id, listingId });
    // Find the application
    const application = await prisma.application.findUnique({
      where: {
        student_id_listingId: {
          student_id,
          listingId: Number(listingId),
        },
      },
    });
    console.log('[acceptStudent] Found application:', application);
    if (!application) {
      console.log('[acceptStudent] Application not found');
      return NextResponse.json({ message: 'Application not found', success: false });
    }
    // Update status to ACCEPTED
    const updated = await prisma.application.update({
      where: { id: application.id },
      data: {
        status: 'ACCEPTED',
        reviewedAt: new Date(),
      },
    });
    console.log('[acceptStudent] Updated application:', updated);
    return NextResponse.json({ message: 'Student accepted successfully', success: true });
  } catch (error) {
    console.error('[acceptStudent] Error:', error);
    return NextResponse.json({ message: 'Internal server error', success: false });
  }
}
// FRONTEND: Send { student_id, listingId } in POST body. On success, check for { success: true }.
