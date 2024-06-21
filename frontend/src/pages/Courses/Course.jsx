import {Flex} from "antd"
import { Stack, Group, Image,Grid  } from '@mantine/core';


import Navbar from "../home/Navbar/Navbar"
import Footer from './../home/Footer/Footer';


const Course = () => {
  return (
    <>
      <Navbar />
      <Flex vertical className="max-w-[1440px] mx-auto px-4 gap-24 py-5" align="center" justify="center" wrap="wrap">
          <Group className="w-full" align="center" justify="center">
            <Stack>
              <Image src="https://shauryacomputersganaur.com/img/it-course.png" alt="IT"/>  
            </Stack>
            <Stack className="w-[800px] xl:px-10">
              <h1 className="font-bold text-3xl text-center">Information Technology</h1>
              <p className="text-justify">
                Computer Basic Course in Information Technologies is the most popular and needed course in todays life. Every one knows that he should have knowledge of Microsoft Word, Excel, Powerpoint, Outlook, Access, Paint, Notepad etc. But how many knows that what's there use in actual life. IPJS offers you the best basic and advance information technologies course with full written project work and assignments.
              </p>
            </Stack>
          </Group>
          <Group className="w-full" align="center" justify="center">
            <Stack className="w-[800px] xl:px-10">
              <h1 className="font-bold text-3xl text-center">Advance Accounting</h1>
              <p className="text-justify">
                IPJS Institute offers a comprehensive Tally (Basic & Advance) preparing in Gannaur, Sonipat. The broad useful preparation gave by Tally preparing organization in area. We prepares live undertakings and recreations. Such a nitty-gritty Tally course has helped our understudies secure occupation in different MNCs. The coaches at IPJS Institute Ganaur Sonipat are subject authority corporate experts giving top to bottom investigation in Tally course in Gannaur, Sonipat. Members finishing the Tally ERP 9 affirmation have plenty of openings for work in the business.
              </p>
            </Stack>
            <Stack>
              <Image src="https://shauryacomputersganaur.com/img/accounts.jpg" alt="IT"/>  
            </Stack>
          </Group>
          
          <Group className="w-full" align="center" justify="center">
            <Stack>
              <Image src="https://shauryacomputersganaur.com/img/Graphics-Design.jpg" alt="IT"/>  
            </Stack>
            <Stack className="w-[800px] xl:px-10">
              <h1 className="font-bold text-3xl text-center">Graphics Designing</h1>
              <p className="text-justify">
                Graphics Designing is the most popular and interesting course in todays IT World. People who are creative, who has good knowledge of colors and ideas are aggresive should admit in these kind of courses. Photoshop, Corel Draw, illustrator, Adobe Premier, Sketching, Video Editing, 3D Effects, VFX and many more are there in multimedia course.
              </p>
              <p  className="text-justify">
                With a very good scope of career multimedia course gives you many ways to go on. You can work as a graphics designer in any IT Company, Web Designing and Development Company, Product manaufacturer as well as you can work in animation line like video editing and photography line. Graphics designing is a very wast area where you can do your own work too and surely it will never let you down.
              </p>
            </Stack>
          </Group>


          <Group className="w-full" align="center" justify="center">
            <Stack className="w-[800px] xl:px-10">
              <h1 className="font-bold text-3xl text-center">Programming Languages</h1>
              <p className="text-justify">
                As well as technologies spearding their legs in todays era you can say just because of programming language. Programming language is kind of course where you learn how a computer works, how a computer programs work and many more. Some times we see any company, organization using any kind of offline or online software and some time it comes to common man mind how they make it. It is possible just becasue of programming languages. PHP, .NET, Java, Android, Python. iOS, Windows, Nodejs, Angular all are famous language in todays world.
              </p>
            </Stack>
            <Stack>
              <Image src="https://shauryacomputersganaur.com/img/Programming.jpg" alt="IT"/>  
            </Stack>
          </Group>
      </Flex>
      <Footer />
    </>
  )
}

export default Course
