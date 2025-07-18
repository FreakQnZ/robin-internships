import { NextResponse } from 'next/server';
import prisma from '@/app/utils/database/prismaClient';

export async function POST(request) {
  try {
    const {
      userId,
      firstName,
      lastName,
      college,
      email,
      course,
      Domains,
      yearOfGraduation,
      phoneNumber,
      gender,
      resume,
      portfolio,
      age,
      imgURL,
    } = await request.json();

    console.log('Received data:', {
      userId,
      firstName,
      lastName,
      college,
      email,
      course,
      Domains,
      yearOfGraduation,
      phoneNumber,
      gender,
      resume,
      portfolio,
      age,
      imgURL,
    });

    await prisma.userAll.create({
      data: {
        userId,
        role: 'student',
      },
    });

    // Parse phoneNumber and age safely
    let parsedPhoneNumber;
    try {
      parsedPhoneNumber = phoneNumber ? BigInt(phoneNumber) : BigInt(0);
    } catch (e) {
      console.error('Invalid phoneNumber for BigInt:', phoneNumber, e);
      parsedPhoneNumber = BigInt(0);
    }
    let parsedAge = parseInt(age);
    if (isNaN(parsedAge)) parsedAge = 0;

    console.log('Parsed phoneNumber:', parsedPhoneNumber, 'Parsed age:', parsedAge);

    await prisma.student.create({
      data: {
        userId,
        firstName,
        lastName,
        email,
        college,
        course,
        gender,
        phoneNumber: phoneNumber,
        Domains,
        yearOfGraduation: parseInt(yearOfGraduation) || 0,
        resume,
        portfolio,
        imgURL,
        age: parsedAge,
        // Lors and studentListings are left empty by default
      },
    });

    return NextResponse.json({
      message: 'User and student added successfully',
      success: true,
    });
  } catch (error) {
    console.error('Error in /api/newStudent:', error);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
