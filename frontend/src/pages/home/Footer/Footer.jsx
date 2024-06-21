import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoPhonePortraitOutline,IoLogoFacebook  } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Iframe from "react-iframe"


const Footer = () => {
  return (
    <footer className='flex flex-col' data-theme="retro">
      <div className='flex px-10 justify-between items-center xl:items-start py-5 gap-10 flex-wrap flex-grow'>
        {/* Review */}
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='text-xl xl:text-3xl font-bold'>Student's Review</h1>
          <div className="card xl:w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Student's Name
                <div className="badge badge-secondary">Microsoft</div>
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, quae!</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Ratings</div> 
                <div className="badge badge-outline">
                  <FaStar size={15}/>
                  <FaStar size={15}/>
                  <FaStar size={15}/>
                  <FaStar size={15}/>
                  <FaStarHalfAlt size={15}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}


        <div className="flex flex-col items-center xl:items-start justify-center gap-8">
          <h3 className="text-3xl font-bold">
            Quick Links
          </h3>
          <ul className='flex gap-4 flex-col'>
            <li className='text-xl'>
              <Link to="/" >Home</Link>
            </li>
            <li className='text-xl'>
              <Link to="/MainAboutUs" >About Us</Link>
            </li>
            <li className='text-xl'>
              <Link to="/Courses"  >Courses</Link>
            </li>
            <li className='text-xl'>
              <Link to="/Carrer" >Careers</Link>
            </li>
            <li className='text-xl'>
              <Link to="/Contact" >Contact</Link>
            </li>
          </ul>
          <p />
        </div>


        {/* Address */}

        <div className="flex flex-col items-start justify-center gap-8">
          <h3 className="text-3xl font-bold text-center w-full">
            ADDRESS
          </h3>
          <p className='text-xl'>
            <strong>Namaste Chowk (Devi Lal Chowk),</strong><br />Opposite Malik
            Motors,
            <br />
            First Floor to Fashion 4Ever,
            <br />
            Ganaur, Haryana 131101
            <br className='max-xl:hidden'/> <br className='max-xl:hidden'/>
          </p>
          <div className='flex items-start flex-col gap-4'>
            <span className='flex items-center justify-center'><MdEmail size={25}/> <span>info.hartron@gmail.com</span></span>
            <span className='flex items-center justify-center'><FaPhone size={25}/> <span>+91 7027327971</span></span>
            <span className='flex items-center justify-center'><IoPhonePortraitOutline size={25}/><span>+91 7027327913</span></span>
          </div>
        </div>


        {/* Map */}

        <div className= "flex flex-col items-center justify-center gap-8">
          <h3 className="text-3xl font-bold">
            LOCATION
          </h3>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d871.2469184083699!2d77.02027282920419!3d29.135553998888913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db7f2146707f1%3A0xf14c2f1f42499fca!2sHARTRON%20APPROVED%20WORKSTATION!5e0!3m2!1sen!2sin!4v1576915692200!5m2!1sen!2sin"
            frameBorder={0}
            allowFullScreen=""
            className='xl:w-[300px] xl:h-[320px] w-[200px] h-[200px]'
          />
        </div>
      </div>

      {/* Down Footer */}
      <div className='flex items-center justify-center gap-10 xl:h-20 max-xl:py-4' data-theme = "dark">
        <p className='text-xl xl:text-2xl font-semibold text-center'>Copyright © Shaurya Computers, 2020. All Right Reserved.</p>
        <Link to={{}} className='max-xl:hidden'>
          <IoLogoFacebook size={25}/>
        </Link>
      </div>
    </footer>
  )
}

export default Footer

