import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const { student_id, listingId } = await request.json();
    console.log('[rejectStudent] Request:', { student_id, listingId });
    // Find the application
    const application = await prisma.application.findUnique({
      where: {
        student_id_listingId: {
          student_id,
          listingId: Number(listingId),
        },
      },
    });
    console.log('[rejectStudent] Found application:', application);
    if (!application) {
      console.log('[rejectStudent] Application not found');
      return NextResponse.json({ message: 'Application not found', success: false });
    }
    // Update status to REJECTED
    const updated = await prisma.application.update({
      where: { id: application.id },
      data: {
        status: 'REJECTED',
        reviewedAt: new Date(),
      },
    });
    console.log('[rejectStudent] Updated application:', updated);
    return NextResponse.json({ message: 'Student rejected successfully', success: true });
  } catch (error) {
    console.error('[rejectStudent] Error:', error);
    return NextResponse.json({ message: 'Internal server error', success: false });
  }
}
// FRONTEND: Send { student_id, listingId } in POST body. On success, check for { success: true }.
