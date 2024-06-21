import Footer from '../home/Footer/Footer'
import Navbar from '../home/Navbar/Navbar';

import { useState } from 'react';
import {Flex} from "antd"
import {Stack, Group,TextInput,FileInput ,Grid,Button} from  "@mantine/core";

import useNewJobEnquiry from '../../hooks/Job/useNewJobEnquiry';

const JobEnquiry = () => {


    const {loading, jobEnquiry} = useNewJobEnquiry();

    const [details, setDetails] = useState({
        name: "",
        fatherName: "",
        qualification: "",
        experience: "",
        expertise:"",
        resume: null,
        image: null,
    })

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("name",details.name)
        formData.append("fatherName",details.fatherName)
        formData.append("qualification",details.qualification)
        formData.append("experience",details.experience)
        formData.append("expertise",details.expertise)
        formData.append("resume",details.resume)
        formData.append("image",details.image)
        
        console.log(formData)

        await jobEnquiry(formData);
    }



  return (
    <>
        <Navbar />

        <Flex className='max-w-[1440px] bg-gray-500 mx-auto py-10 px-8 my-20 rounded-lg'>
            <Stack className='w-full' justify='space-between' align='center'>
                <Group align='start' className='w-full'>
                    <h1>To register your CV with us, Please fill in the below mentioned form:</h1>
                </Group>
                <Group align='start' className='w-full'>
                    <h1 className='text-3xl font-bold'>
                        Apply Now
                    </h1>
                </Group>
                <Grid className='w-full'>
                    <Grid.Col span={{base:12 ,lg:6}}>
                        <TextInput
                            variant="filled"
                            size="md"
                            radius="md"
                            label="Candidate Name"
                            placeholder="Candidate Name"
                            value={details.name}
                            onChange={(e) => setDetails({...details, name:e.target.value})}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base:12 ,lg:6}}>
                        <TextInput
                            variant="filled"
                            size="md"
                            radius="md"
                            label="Father Name"
                            placeholder="Father Name"
                            value={details.fatherName}
                            onChange={(e) => setDetails({...details, fatherName:e.target.value})}
                        />
                    </Grid.Col>
                </Grid >
                <Grid className='w-full'>
                    <Grid.Col span={{base:12 ,lg:6}}>
                        <TextInput
                            variant="filled"
                            size="md"
                            radius="md"
                            label="Qualification"
                            placeholder="Qualification"
                            value={details.qualification}
                            onChange={(e) => setDetails({...details, qualification:e.target.value})}
                        />
                    </Grid.Col>
                    <Grid.Col span={{base:12 ,lg:6}}>
                        <TextInput
                            variant="filled"
                            size="md"
                            radius="md"
                            label="Experience"
                            placeholder="Experience"
                            value={details.experience}
                            onChange={(e) => setDetails({...details, experience:e.target.value})}
                        />
                    </Grid.Col>
                </Grid>

                <Grid className='w-full' grow>
                    <Grid.Col>
                        <TextInput
                            variant="filled"
                            size="md"
                            radius="md"
                            label="Expertise"
                            placeholder="Expertise"
                            value={details.expertise}
                            onChange={(e) => setDetails({...details, expertise:e.target.value})}
                        />
                    </Grid.Col>
                </Grid>
                <Grid className='w-full'>
                    <Grid.Col span={{base:12 ,lg:6}}>
                        <FileInput
                            clearable
                            variant="filled"
                            size="md"
                            radius="md"
                            label="Resume"
                            placeholder="Resume"
                            accept="application/pdf"
                            value={details.resume}
                            onChange={(e) => 
                                setDetails({...details,resume: e})
                            }
                        />
                    </Grid.Col>
                    <Grid.Col span={{base:12 ,lg:6}}>
                        <FileInput
                            clearable
                            variant="filled"
                            size="md"
                            radius="md"
                            label="Image"
                            placeholder="Image"
                            accept="image/png,image/jpeg"
                            value={details.image}
                            onChange={(e) => setDetails({...details,image: e})}
                        />
                    </Grid.Col>
                </Grid>

                <Group align='center' justify='end' className='w-full pt-10'>
                    <Button color='green' onClick={handleSubmit}>
                        {loading ? <span className='loading loading-spinner'/> : "Submit"}
                    </Button>
                </Group>

            </Stack>
        </Flex>

        <Footer /> 
    </>
  )
}

export default JobEnquiry

