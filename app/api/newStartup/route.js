import { NextResponse } from 'next/server';
import { userAll } from '../../utils/database/models/allusers/userall';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';

export async function POST(request) {
  try {
    connectDB();

    const { userId, name, desc, email, domain, phno, insta, linkedin } = await request.json();

    await userAll.create({
      userId,
      role: 'startup',
    });

    await startupAll.create({
      userId,
      name,
      email,
      desc,
      domain,
      phno,
      insta,
      linkedin,
      listings: [],
    });

    return NextResponse.json({
      message: 'User and startup added successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
