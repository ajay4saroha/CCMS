import React from 'react'

const AboutUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex items-center justify-center my-10 gap-10 xl:flex-row flex-col max-lg:px-8">
        <img
            src="/Images/AboutUs/index-side.jpg"
            alt="Best Computer Education Center"
        />
        <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-bold lg:text-3xl text-2xl text-center">
                About Institute for Professional Jobs Studies (Shaurya Computers).
            </h2>
            <div className='text-base text-justify px-8'>
                <p>
                Shaurya Computers is a sister concern Institute of Hartron
                Approved Work Station Gannaur Branch established in 2010 in area.
                we are the only institute in Gannaur area which offers career
                course to the students with placement gaurantee.
                </p>
                <br />
                <p>
                Shaurya Computers is in constant pursuit of excellence in the
                sector of computer education and hence has enough record of
                creating winners. Over the years the institute has bagged up
                plenty of goodwill from their students and therefore this asset
                along with the highly skilled trainers and multimedia
                professionals has been able to create solid trust among people.
                </p>
                <br />
                <p>
                About HARTRON, The Corporation has been a pioneer in Information
                Technology and has a number of prestigious projects to its credit.
                Hartron was the first organisation that undertook the voter
                Identity Cards Projects in India. The identity cards project, was
                the largest database application in India, wherein the details of
                voters were to be maintained alongwith their photographs.The
                project was executed with the highest accuracy of 98% in India,
                which is a record.
                </p>
            </div>
        </div>
      </div>
  )
}

export default AboutUs
