// TaskPage.js

import React from 'react';
import {Container, Text} from '@chakra-ui/react'
import {useParams} from 'react-router-dom'

const TaskPage = () => {
 
    
  const { taskId } = useParams();

 console.log(taskId)

  return (
    <Container
    ml={{ base: 0, md: "25%" }}
    p={{ base: "4", md: "10" }}
    maxW={{ base: "100%", md: "75%" }}
    bg="black"
    height='100vh'
    mt="20"
    fontFamily="clash grotesk"
  >
      <Text color='white'>Task Details for Task ID: {taskId}</Text>
      {/* Display task details here */}
      </Container>
  );
};

export default TaskPage;
