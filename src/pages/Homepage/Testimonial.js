import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text,  Heading } from "@chakra-ui/react";
import People from '../../assets/images/human_people.png'

const testimonies = [
  {
    name: "John Doe",
    testimony: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Smith",
    testimony: "Praesent vel neque eu libero efficitur auctor a a ipsum.",
  },
  // Add more testimonies here
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("testimony"); // 

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);
  const handleNext = () => {
    setAnimationClass(""); // Remove animation class
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
      setAnimationClass("testimony"); // Add animation class
    }, 50); // Small delay to ensure the class is removed and added
  };

  const handlePrevious = () => {
    setAnimationClass(""); // Remove animation class
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
      );
      setAnimationClass("testimony"); // Add animation class
    }, 50); // Small delay to ensure the class is removed and added
  };


  const currentTestimony = testimonies[currentIndex];

  return (
    <Box p={{base: '0', md: '8'}} mx="auto" my={10} w={{base: '100%', md: '80%'}}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Box px="20">
          {/* Constant image */}
          <Image
            src={People}
            alt="Testimonial"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>
        <Box
          px={{base: '10', md: '0'}}
          pb='20'
          transition="opacity 0.3s ease-in-out"
          color="white"
         fontFamily='clash grotesk'
        >
         <Heading  color='#CB29BE' fontWeight='400' py='10' fontSize='18PX'>_TESTIMONIALS</Heading>
          <Text fontSize={{base: '25px', md: '35px'}} fontWeight="500" mb="10">
           What our customers say
          </Text>
          <Box>
            <Text mb="4" className={animationClass} color='#808080'>{currentTestimony.testimony}</Text>
            <Text fontWeight="500"  className={animationClass}>{currentTestimony.name}</Text>
            <Text>User</Text>
          </Box>
          <Box mt={12} display='flex'>
            <Box cursor='pointer'>
          <iconify-icon
            icon="bi:arrow-left-circle-fill"
            style={{ color: "#808080", marginLeft: '12px' }}
            width="36"
            onClick={handlePrevious}
            cursor='pointer'
          ></iconify-icon>
          </Box>

          <Box cursor='pointer'>
          <iconify-icon
            icon="bi:arrow-right-circle-fill"
            style={{ color: "white",  marginLeft: '12px' }}
            width="36"
            onClick={handleNext}
            
          ></iconify-icon>
          </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimonial;
