import {Flex,Image} from "antd"
import { Stack, Group,Grid  } from '@mantine/core';

import Navbar from "../home/Navbar/Navbar"
import Footer from "../home/Footer/Footer"

const Placement = () => {
  return (
    <>
        <Navbar />
        <Flex vertical className="max-w-[1440px] mx-auto py-10" align="center" justify="center">
            <Group className="py-10 w-full px-2 xl:px-10" align="center" justify="center">
              <Stack className="w-[500px] h-[500px] overflow-hidden">
                <Image src="https://shauryacomputersganaur.com/img/himanshu.jpg" alt="IT" className="object-contain object-center" preview={false}/>  
              </Stack>
              <Stack span={6} className="w-[800px] px-2 xl:px-10" justify="center" align="center">
                <h1 className="font-bold text-3xl text-center">Another Milestone In Placement</h1>
                <p className="text-justify">
                  Placement or we can say JOB is one of the most important factors after completing any diploma and degree. If we are jobless we think what we have done is a waste. But Shaurya Computers helps you to keep away from these kind of thoughts. Our Placement cell provides full support to candidates who are pursuing any course or pursuaded any qualification and skill from our Shaurya Computers and HARTRON Approved Workstation. Students can easily register theirselves on our placement option below with their resume. Either you are a fresher or experienced any one can register theirself free of cost.
                </p>
              </Stack>
            </Group>

            <Group >
              <h1 className="text-5xl text-center font-semibold py-4">PLACEMENT GALLERY</h1>
            </Group>
            <Image.PreviewGroup
              items={[
                'https://shauryacomputersganaur.com/img/placementImg/img-1.jpg',
                'https://shauryacomputersganaur.com/img/placementImg/img-2.jpg',
                'https://shauryacomputersganaur.com/img/placementImg/img-3.jpg',
                'https://shauryacomputersganaur.com/img/placementImg/img-4.jpg',
                'https://shauryacomputersganaur.com/img/placementImg/img-5.jpg',
                'https://shauryacomputersganaur.com/img/placementImg/img-6.jpg',
                'https://shauryacomputersganaur.com/img/placementImg/img-7.jpg',
                'https://shauryacomputersganaur.com/img/placementImg/img-8.jpg',
                'https://shauryacomputersganaur.com/img/placementImg/img-9.jpg',
              ]}
            >
              <Flex wrap="wrap" className="w-full px-2" gap={20} align="center" justify="center">
                <Image
                  width={400}
                  src="https://shauryacomputersganaur.com/img/placementImg/img-1.jpg"
                />
                <Image
                  width={400}
                  src="https://shauryacomputersganaur.com/img/placementImg/img-2.jpg"
                />
                <Image
                  width={400}
                  src="https://shauryacomputersganaur.com/img/placementImg/img-3.jpg"
                />
                <Image
                  width={400}
                  src="https://shauryacomputersganaur.com/img/placementImg/img-4.jpg"
                />
                <Image
                  width={400}
                  src="https://shauryacomputersganaur.com/img/placementImg/img-5.jpg"
                />
                <Image
                  width={400}
                  src="https://shauryacomputersganaur.com/img/placementImg/img-6.jpg"
                />
                <Image
                  width={400}
                  src="https://shauryacomputersganaur.com/img/placementImg/img-7.jpg"
                />
                <Image
                  width={400}
                  src="https://shauryacomputersganaur.com/img/placementImg/img-8.jpg"
                />
                <Image
                  width={400}
                  src="https://shauryacomputersganaur.com/img/placementImg/img-9.jpg"
                />
              </Flex>
            </Image.PreviewGroup>
        </Flex>
        <Footer />
    </>
  )
}

export default Placement
