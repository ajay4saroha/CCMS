import React from 'react'

const WhyJoin = () => {
    return (
      <div data-theme= "dark" className='py-10 max-lg:px-8'>            
        <div className="max-w-[1550px] mx-auto flex items-center justify-center flex-col gap-10">
            <div className="flex items-center justify-center">
                <h2 className="font-bold lg:text-4xl text-2xl text-center text-white">Why Join Shaurya Computers</h2>
            </div>
            
            <div className='flex items-center justify-center gap-10 flex-wrap'>
                <div className="lg:w-80 lg:h-80 w-60 h-60 bg-white rounded-full relative flex items-center justify-center flex-col text-black gap-4">
                    <div className="w-12 h-12 absolute lg:top-0 lg:right-[40px] top-0 right-0 bg-slate-400 rounded-full flex items-center justify-center text-black font-bold">
                        1
                    </div>
                    {/* Title */}
                    <h4 className="text-3xl text-center w-64">STUDENT DEVELOPMENT</h4>
                    <div className='bg-black w-48 h-[1px]'/>
                    {/* Description */}
                    <p className='text-center lg:w-72 w-48'> Regular workshops &amp; Events for Students </p>
                </div>

                <div className="lg:w-80 lg:h-80 w-60 h-60 bg-white rounded-full relative flex items-center justify-center flex-col text-black gap-4">
                    <div className="w-12 h-12 absolute lg:top-0 lg:right-[40px] top-0 right-0 bg-slate-400 rounded-full flex items-center justify-center text-black font-bold">
                        2
                    </div>
                    {/* Title */}
                    <h4 className="text-3xl text-center w-64">PROFESSIONAL TRAINERS</h4>
                    <div className='bg-black w-48 h-[1px]'/>
                    {/* Description */}
                    <p className='text-center lg:w-72 w-48'>Get Trained by the Industry Experts </p>
                </div>


                <div className="lg:w-80 lg:h-80 w-60 h-60 bg-white rounded-full relative flex items-center justify-center flex-col text-black gap-4">
                    <div className="w-12 h-12 absolute lg:top-0 lg:right-[40px] top-0 right-0 bg-slate-400 rounded-full flex items-center justify-center text-black font-bold">
                        3
                    </div>
                    {/* Title */}
                    <h4 className="text-3xl text-center w-64">LATEST CURRICULUM</h4>
                    <div className='bg-black w-48 h-[1px]'/>
                    {/* Description */}
                    <p className='text-center lg:w-72 w-48'>Curriculum Based on Industry Requirements </p>
                </div>

                
                <div className="lg:w-80 lg:h-80 w-60 h-60 bg-white rounded-full relative flex items-center justify-center flex-col text-black gap-4">
                    <div className="w-12 h-12 absolute lg:top-0 lg:right-[40px] top-0 right-0 bg-slate-400 rounded-full flex items-center justify-center text-black font-bold">
                        4
                    </div>
                    {/* Title */}
                    <h4 className="text-3xl text-center w-64">PLACEMENT ASSISTANCE</h4>
                    <div className='bg-black w-48 h-[1px]'/>
                    {/* Description */}
                    <p className='text-center lg:w-72 w-48'> After Successful Completion of Courses</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyJoin
