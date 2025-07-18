import React from 'react'
import StudentNavbar from '@/app/components/student/studentNavbar'
import AcceptedListingsStudent from '@/app/components/student/acceptedListingsStudent'
import { currentUser } from '@clerk/nextjs'

const StudentDB = async () => {
  const user = await currentUser()
  const uId = user?.id

  async function getStudentDetails() {
    try {
      const response = await fetch(`${process.env.API_HOST}/studentDetails`, {
        method: 'POST',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: uId }),
      })

      if (!response.ok) throw new Error('Failed to fetch student details')
      return response.json()
    } catch (err) {
      console.error('Error fetching student details:', err)
      return null
    }
  }

  async function getAcceptedListingsForStudent() {
    try {
      const response = await fetch(`${process.env.API_HOST}/getAcceptedListingsForStudent`, {
        method: 'POST',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: uId }),
      })

      if (!response.ok) throw new Error('Failed to fetch accepted listings')
      return response.json()
    } catch (err) {
      console.error('Error fetching accepted listings:', err)
      return []
    }
  }

  const listings = await getAcceptedListingsForStudent()
  const details = await getStudentDetails()

  return (
    <div className='lg:h-dvh w-full flex'>
      <StudentNavbar act='accepted' />
      <div className='h-full w-full flex lg:flex-row flex-col'>
        <div className='h-full lg:w-1/2 w-full'>
          <div className='lg:h-2/3 p-5 flex flex-col gap-2'>
            <p className='text-2xl'>Accepted Internships</p>
            <div className='flex-1 bg-[#c8edfd] w-full rounded-box p-2 overflow-y-scroll flex flex-col gap-2'>
              {listings?.map((listing, index) => (
                <AcceptedListingsStudent
                  key={index}
                  data={listing}
                  index={index}
                  firstName={user?.firstName}
                  lastName={user?.lastName}
                  email={details?.data?.student?.email}
                  college={details?.data?.student?.college}
                  userId={uId}
                  studentPhoneNumber={details?.data?.student?.phoneNumber}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDB
