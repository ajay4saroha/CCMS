import Iframe from "react-iframe"

const OnlineClass = () => {
  return (
        <div className="my-5 flex flex-col items-center justify-center gap-14 w-full">
            <h2 className="lg:text-4xl text-2xl ">ONLINE CLASSES</h2>
            <div className='flex md:flex-row flex-col max-w-[1700px] w-full gap-8 flex-wrap items-center justify-center'>
              <div className='flex flex-col flex-1 gap-2 items-center justify-center'>
                  <div className="md:w-80 w-60">  
                    <Iframe
                        title='Video3'
                        src="https://www.youtube.com/embed/Kv51Qd-ls6A"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        className="w-full"
                    />
                  </div>
                    <h3 className="text-2xl">MS-Word</h3>
                    <div className="text-center">
                        <a href="..." className="btn btn-info">
                            VIEW MORE
                        </a>
                    </div> 
                </div>
              
              <div className='flex flex-col flex-1 items-center justify-center gap-2'>
                  <div className="md:w-80 w-60">                        
                    <Iframe
                        title='Video4'
                        src="https://www.youtube.com/embed/s2h7LMh0PKk"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                          className="w-full"
                        />
                    </div>
                    <h3 className="text-2xl">MS-Excel</h3>
                    <div className="text-center">
                        <a href="excelclasses.php" className="btn btn-info">
                            VIEW MORE
                        </a>
                    </div>
              </div>

                <div className='flex flex-col flex-1 items-center justify-center gap-2'>
                  <div className="md:w-80 w-60">
                        <Iframe
                            title='Video1'
                            src="https://www.youtube.com/embed/Azeyav2Onb8"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                          className="w-full"

                        />
                  </div>      
                    <h3 className="text-2xl">English Classes </h3>
                    <div className="text-center">
                        <a href="EnglishClasses.php" className="btn btn-info">
                            VIEW MORE
                        </a>
                    </div>
              </div>
              
              <div className='flex flex-col flex-1 items-center justify-center gap-5'>
                  <div className="md:w-80 w-60">
                    <Iframe
                        title='Video5'
                        src="https://www.youtube.com/embed/99-UVltirWM"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                          className="w-full"
                    />           
                  </div>
                    <h3 className="text-center">Languages</h3>
                    <div className="text-center">
                        <a href="languageclasses.php" className="btn btn-info">
                            VIEW MORE
                        </a>
                    </div>
                </div>
              










            </div>
        </div>
              
  )
}

export default OnlineClass
