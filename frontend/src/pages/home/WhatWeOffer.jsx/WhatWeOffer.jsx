

const WhatWeOffer = () => {
  return (
      <div className="max-w-[1550px] w-full mx-auto flex items-center justify-center flex-col my-10 gap-14">
          <div className="flex flex-col items-center justify-center">
            <h1 className="lg:text-4xl text-2xl py-6">WHAT WE OFFER</h1>
            <div className="text-center md:w-[40rem] lg:w-[60rem]">
                <p className="lg:text-xl text-xs text-center">
                    Shaurya Computers is a sister concern organization for Hartron
                    Approved Work Station, Gannaur(Sonipat). Shaurya Computers provides
                    high quality computer education at a very high standard. Shaurya
                    Computers's mission is to create a pool of high quality professionals
                    who will meet the demanding needs of MNCs &amp; Other organizations
                    for tomorrow’s challenges.
                </p>
            </div>
          </div>
        <div className="flex items-center justify-center md:flex-row flex-col gap-12 flex-wrap">
            <div className="flex flex-col items-center justify-center gap-2 lg:w-[25rem] w-64 max-lg:mx-4">
                  <img src="/Images/Icons/icon-1.png" alt="Information technology programs"
                    className="w-2/5"
                  />
                  <div className="flex flex-col items-center gap-4">   
                    <h5 className="uppercase lg:text-2xl">
                        IT &amp; Basic
                    </h5>
                    <p className="lg:text-base text-sm text-center">
                        Understanding the spectrum that has influence over every aspect of our lives
                    </p>
                  </div>
            </div>
              
            <div className="flex flex-col items-center justify-center gap-2 lg:w-[25rem] w-64 max-lg:mx-4">
                <img
                src="/Images/Icons/icon-2.png"
                className="w-2/5"
                alt="Accounting courses"
                  />
                  <div className="flex flex-col items-center gap-4">
                    <h5 className="uppercase lg:text-2xl">
                        Advance Accounts
                    </h5>
                    <p className="lg:text-base text-sm text-center">
                        The process of measuring, processing and communicating financial
                        information &amp; GST.
                    </p>
                  </div>
              </div>
              
            <div className="flex flex-col items-center justify-center gap-2 lg:w-[25rem] w-64 max-lg:mx-4">
                <img
                src="/Images/Icons/icon-3.png"
                className="w-2/5"
                alt="Multimedia and Animation training"
                  />
                  <div className="flex flex-col items-center gap-4">             
                    <h5 className="uppercase lg:text-2xl">
                        Graphics Designing
                    </h5>
                    <p className="lg:text-base text-sm text-center">
                        We are a well-known multimedia &amp; Graphics Designing Learning
                        institute that trains students for careers.
                    </p>
                  </div>
              </div>
              
            <div className="flex flex-col items-center justify-center gap-2 lg:w-[25rem] w-64 max-lg:mx-4">
                <img
                src="/Images/Icons/icon-4.png"
                className="w-2/5"
                alt="Become a digital marketer"
                  />
                <div className="flex flex-col items-center gap-4">
                    <h5 className="uppercase lg:text-2xl">
                        Digital Marketing
                    </h5>
                    <p className="lg:text-base text-sm text-center">
                        Promotion and sale of products and brands across the electronic
                        mediums.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeOffer
