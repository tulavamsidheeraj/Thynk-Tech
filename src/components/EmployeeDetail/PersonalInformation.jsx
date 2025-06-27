import React from 'react'

const PersonalInformation = ({user}) => {
  return (
    <div className='shadow-xl/20 rounded my-9 p-7'>
        <div className='text-2xl my-4'>Personal Information</div>
        <div className='grid grid-cols-3 gap-4'>
            <div>
                <div className='text-sm'>Name</div>
                <div className='my-1 text-blue-600'>{user.name}</div>
            </div>
            <div>
                <div className='text-sm'>E-mail</div>
                <div className='my-1 text-blue-600'>{user.email}</div>
            </div>
            <div>
                <div className='text-sm'>Phone Number</div>
                <div className='my-1 text-blue-600'>{user.email}</div>
            </div>
            <div>
                <div className='text-sm'>Designation</div>
                <div className='my-1 text-blue-600'>{user.designation}</div>
            </div>
            <div>
                <div className='text-sm'>Role</div>
                <div className='my-1 text-blue-600'>{user.role}</div>
            </div>
            <div>
                <div className='text-sm'>ID</div>
                <div className='my-1 text-blue-600'>EMP-{user.id}</div>
            </div>
            <div>
                <div className='text-sm'>Joining Date</div>
                <div className='my-1 text-blue-600'>{user.joiningDate}</div>
            </div>
        </div>
        <div className='flex gap-7 mt-6 mb-4'>
            <button className='rounded bg-[#82ECFF] text-blue-600 px-2 py-1 hover:text-white hover:bg-blue-400'>Edit</button>
            <button className='rounded bg-[#FF9A9C] text-red-600 px-2 py-1 hover:text-white hover:bg-red-600'>Deactivate</button>
            <button className='rounded bg-[#8F8F8F] text-[#D4D4D4] px-2 py-1 hover:text-white hover:bg-[#3E4347]'>Reset Password</button>
        </div>
    </div>
  )
}

export default PersonalInformation