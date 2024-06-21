import React from 'react'

const TeacherDashboard = ({user, setUser, editMode}) => {
  return (
      <div>
           <form className='form-control items-start min-w-96'>
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
          <label className='label label-text  text-2xl'>Designation :</label>
          <input type="text"
            className='px-6  text-xl h-10 input input-primary input-bordered'
            value={user.role}
            disabled
          />
        </div>
        </form>  
    </div>
  )
}

export default TeacherDashboard
