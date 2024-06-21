import Footer from '../home/Footer/Footer'
import Navbar from '../home/Navbar/Navbar';

import { useState } from 'react';
import useNewEnquiry from '../../hooks/useNewEnquiry';


import { FaPhone } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Iframe from "react-iframe"

import {Flex} from "antd"
import {Stack, Group,TextInput,FileInput ,Grid,Button} from  "@mantine/core";

const Enquiry = () => {

  const {loading, newEnquiry} = useNewEnquiry();

  const [details, setDetails] = useState({
    name: "",
    fatherName: "",
    mobile: "",
    parentMobile: "",
    qualification: "",
    address: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await newEnquiry(details);
    if (response) {
      setDetails({
        name: "",
        fatherName: "",
        mobile: "",
        parentMobile: "",
        qualification: "",
        address: "",
      })
    }
  }



  return (
    <>
      <Navbar />
      <Flex className='max-w-[1280px] mx-auto my-16 px-2 md:px-8 max-md:flex-wrap max-md:!justify-center' justify='space-between' align='center' gap={30}>
        <Stack className='max-md:items-center'>
            <h3 className="text-3xl font-bold max-md:text-center">
              ADDRESS
            </h3>
            <p className='text-xl '>
              <strong>Namaste Chowk (Devi Lal Chowk),</strong><br />Opposite Malik
              Motors,
              <br />
              First Floor to Fashion 4Ever,
              <br />
              Ganaur, Haryana 131101
            </p>
            <div className='flex items-start flex-col gap-4'>
              <span className='flex items-center justify-center gap-2'><MdEmail size={25}/> <span>hartronhelp@gmail.com</span></span>
              <span className='flex items-center justify-center gap-2'><FaPhone size={25}/> <span>+91 7027327971</span></span>
              <span className='flex items-center justify-center gap-2'><IoPhonePortraitOutline size={25}/><span>+91 7027327913</span></span>
            </div>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d871.2469184083699!2d77.02027282920419!3d29.135553998888913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db7f2146707f1%3A0xf14c2f1f42499fca!2sHARTRON%20APPROVED%20WORKSTATION!5e0!3m2!1sen!2sin!4v1576915692200!5m2!1sen!2sin"
              frameBorder={0}
              allowFullScreen=""
              className='lg:w-[500px] lg:h-[300px] w-[300px] h-[300px]'
            />
          </Stack>
          <Stack className='flex flex-col items-start justify-center gap-8'>
            <h1 className='text-4xl font-bold text-center'>Get Free Counselling</h1>
            <form className='flex flex-col items-start justify-center gap-6'>
              <input type="text" placeholder='Name'
                className='input input-bordered w-full text-xl'
                value={details.name}
                onChange={(e) => setDetails({...details, name: e.target.value})}
              />
              <input type="text" placeholder="Father's Name"
                className='input input-bordered w-full text-xl'
                value={details.fatherName}
                onChange={(e) => setDetails({...details, fatherName: e.target.value})}
              />
              <input type="tel" placeholder='Mobile Number'
                className='input input-bordered w-full text-xl'
                value={details.mobile}
                onChange={(e) => setDetails({...details, mobile: e.target.value})}
              />
              <input type="tel" placeholder="Parent's Number"
                className='input input-bordered w-full text-xl'
                value={details.parentMobile}
                onChange={(e) => setDetails({...details, parentMobile: e.target.value})}
              />
              <select className='input input-bordered w-full text-xl'
                value={details.qualification}
                onChange={(e) => setDetails({ ...details, qualification: e.target.value })}
              >
                <option hidden>Select Qualification</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>Graduate</option>
              </select>
              <textarea placeholder='Address'
                className='textarea textarea-bordered w-full text-xl'
                value={details.address}
                onChange={(e) => setDetails({...details, address: e.target.value})}
              />
              <button
                className='btn btn-square btn-block btn-success rounded-xl'
                onClick={(e) => handleSubmit(e)}
              >
                {loading ? <span className='loading loading-spinner'/> : "Submit"}
              </button>
              </form>
          </Stack>
      </Flex>
    <Footer /> 
    </>
  )
}

export default Enquiry
