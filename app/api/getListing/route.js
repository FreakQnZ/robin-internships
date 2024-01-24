import { NextResponse } from 'next/server';
import { connectDB } from '@/app/utils/database/connect';
import { startupAll } from '@/app/utils/database/models/startups/startupAll';
import { studentAll } from '@/app/utils/database/models/student/studentAll';

export async function POST(request) {
  try {
    connectDB();

    const {userId} = await request.json();

    // Fetch all records from startupAll
    const allStartups = await startupAll.find();
    const student = await studentAll.findOne({userId});


    // Iterate through each record and extract listings for startups with non-empty listings
    const allListings = allStartups
      .filter((startup) => startup.listings.length > 0) // Only include startups with non-empty listings
      .map((startup) => {
        const { userId, name, email, desc, domain, phno, insta, linkedin, listings } = startup;

        // Extract listings array from each startup
        const startupListings = listings.map((listing) => {
          const { _id, lname, domain, stipend, duration, description, requirements, deadline, startDate, email, internsRequired, applicants } = listing;

          // Check if the listing is already present in the student's listings array
          const isListingPresent = student.listings.some((studentListing) => studentListing.listingId === _id);

          // If the listing is not present, add it to the student's listings array
          if (!isListingPresent) {
            // You can customize the structure as needed
            student.listings.push({
              listingId: _id,
              startupId: userId,
              listingName: lname,
              startupName: name,
              status: 0,
            });
          }

          // Extract applicants array from each listing
          const listingApplicants = applicants.map((applicant) => {
            const { student_id, intern_name, intern_email, intern_college } = applicant;

            // You can customize the structure as needed
            return {
              student_id,
              intern_name,
              intern_email,
              intern_college,
            };
          });

          // You can customize the structure as needed
          return {
            _id,
            lname,
            domain,
            stipend,
            duration,
            description,
            requirements,
            deadline,
            startDate,
            email,
            internsRequired,
            applicants: listingApplicants,
          };
        });

        // You can customize the structure as needed
        return {
          userId,
          name,
          email,
          desc,
          domain,
          phno,
          insta,
          linkedin,
          listings: startupListings,
        };
      });

    return NextResponse.json({
      data: allListings,
      success: true,
    });
  } catch (error) {
    console.error('Error:', error.message);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
