import React from 'react'

const StudentDashboard = ({user , setUser, editMode}) => {
  return (
    <div>
       <form className='form-control items-center justify-center '>
          <div className='flex flex-row items-center justify-between w-full gap-2'>
            <label className='label label-text  text-2xl'>Name :</label>
            <input type="text"
              className='px-6  text-xl h-10 input input-primary input-bordered'
              value={user.fullName}
              disabled={!editMode}
              onChange={(e) => setUser({...user, fullName: e.target.value})}  
            />
          </div>
          <div className='flex flex-row items-center justify-between w-full gap-2'>
            <label className='label label-text  text-2xl'>Email-id :</label>
            <input type="text"
              className='px-6  text-xl h-10 input input-primary input-bordered'
              value={user.email}
              disabled
            />
          </div>
          <div className='flex flex-row items-center justify-between w-full gap-2'>
            <label className='label label-text  text-2xl'>Batch :</label>
            <input type="text"
              className='px-6  text-xl h-10 input input-primary input-bordered'
              value={user.batch}
              disabled
            />
        </div>
        </form>  
    </div>
  )
}

export default StudentDashboard
