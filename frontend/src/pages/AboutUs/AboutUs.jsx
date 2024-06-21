import {Flex} from "antd"
import { Stack, Group, Image,Grid  } from '@mantine/core';


import Navbar from '../home/Navbar/Navbar'
import Footer from '../home/Footer/Footer'

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Flex vertical className="max-w-[1440px] mx-auto px-4 gap-12 py-5" align="center" justify="center" wrap="wrap">
          <Group className="w-full" align="start" justify="center">
            <Stack className="w-[500px] overflow-hidden">
              <Image src="/Images/logo.jpg" alt="IT"/>  
            </Stack>
            <Stack className="w-[800px] xl:px-10">
              <h1 className="font-bold text-3xl text-center">About Shaurya Computers</h1>
              <p className="text-justify">
              Shaurya Computers...Institute for Professional Jobs & Studies is a sister concern Institute of Hartron Approved Work Station/Hartron Skill Center Gannaur Branch established in 2010 in area. we are the only institute in Gannaur area which offers career course to the students with placement gaurantee.
              </p>
              <p className="text-justify">
              Shaurya Computers is in constant pursuit of excellence in the sector of computer education and hence has enough record of creating winners. Over the years the institute has bagged up plenty of goodwill from their students and therefore this asset along with the highly skilled trainers and multimedia professionals has been able to create solid trust among people.
              </p>
              <p className="text-justify">
              About HARTRON, The Corporation has been a pioneer in Information Technology and has a number of prestigious projects to its credit. Hartron was the first organisation that undertook the voter Identity Cards Projects in India. The identity cards project, was the largest database application in India, wherein the details of voters were to be maintained alongwith their photographs.The project was executed with the highest accuracy of 98% in India, which is a record.
              </p>
            </Stack>
          </Group>


          <Group className="w-full" align="start" justify="center">
            <Stack className="w-[800px] xl:px-10">
              <h1 className="font-bold text-3xl text-center">Message From Director</h1>
              <p className="text-justify">
              Since the inception of Hartron Approved Workstation in 2005 , we had an aim to improve the level of Computer Education In our society. Today’s IT industry demands high standards of theory, practice and technology from individuals working as IT professionals. Our curriculum focuses on learning from Theory, followed by Practicals and Projects. We regularly upgrade our curriculum to make our students industry ready. Our faculty, staff and students have created a vibrant place to learn and teach.
              </p>
              <p className="text-justify">
              We believe that all the constituents, the faculty, the students and the core team are all partners in the development and growth of Hartron. We value their respective contributions in making Hartron Approved Workstation to achieve its objectives and obligations.
              </p>
              <p className="text-justify">
              Come to Hartron with your dreams/aspirations with the “I” can attitude, we will guide you to make it reality.
              </p>
            </Stack>
            <Stack className="w-[500px] overflow-hidden">
              <Image src="/Images/logo.jpg" alt="IT"/>  
            </Stack>
          </Group>


          <Grid gutter="xl" grow>
            <Grid.Col span={{base:12, xl:4}}>
              <h1 className="font-bold text-3xl text-center">Our Vision</h1>
              <p className="text-justify">
              At Hartron Approved Workstation , we aspire towards innovating new training methods and provide quality education to students and look forward to revolutionize the professional training sector. Our endeavors are aimed towards creating a state of the art learning environment for ambitious students and providing them with world class facilities for maintaining a comprehensive learning process.
              </p>
            </Grid.Col>
            <Grid.Col span={{base:12, xl:4}}>
              <h1 className="font-bold text-3xl text-center">Our Mission</h1>
              <p className="text-justify">
              At Hartron Approved Workstation , we aspire towards innovating new training methods and provide quality education to students and look forward to revolutionize the professional training sector. Our endeavors are aimed towards creating a state of the art learning environment for ambitious students and providing them with world class facilities for maintaining a comprehensive learning process.
              </p>
            </Grid.Col>
            <Grid.Col span={{base:12, xl:4}}>
              <h1 className="font-bold text-3xl text-center">Our Values</h1>
              <p className="text-justify">
                Students receive special training to prepare them for job interviews.  
              </p>
              <br />
              <p>
                Hartron dedicated placements team ensures that students receive placement assistance upon successful completion of their courses.
              </p>
            </Grid.Col>
          </Grid>
      </Flex> 





      <Footer />
    </>
  )
}

export default AboutUs

