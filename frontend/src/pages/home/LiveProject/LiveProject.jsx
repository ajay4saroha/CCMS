import React from 'react'

const LiveProject = () => {
  return (
      <div data-theme="dark" className='py-10 max-lg:px-10'>
          <div className='max-w-[1440px] mx-auto flex items-center justify-center'>
            <div className="flex items-center justify-center flex-col gap-8">
                <h3 className="uppercase text-3xl text-white font-bold text-center">
                    45 Days Industrial Training with{" "}
                    <span className="text-blue-600">live Projects</span>
                </h3>
                <p className='text-white text-center lg:text-xl text-sm'>
                    At Shaurya Computers, We Aspire Towards Innovating New Training
                    Methods And Provide Quality Education To Students And Look Forward
                    To Revolutionize The Professional Training Sector. We give 6 month
                    Industrial training with Live Project which helps the student to get
                    the 100% placement.
                </p>
                <div className='w-40'>
                <button className='btn btn-primary btn-square btn-block text-2xl'>
                    Apply Now
                </button>
                </div>
            </div>
            </div>
        </div>
  )
}

export default LiveProject
