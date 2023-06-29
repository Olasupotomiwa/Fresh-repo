import {
  Box,
  Link,
  Button,
  Image,
  Text,
  Stack,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import { useState, useEffect, useCallback } from "react";
import image1 from "../../assets/short black.png";
import image2 from "../../assets/short purple.png";
import image3 from "../../assets/short white.png";
import image4 from "../../assets/pants purple sigma club text with art-1.png";
import image5 from "../../assets/pants white sigma club text with art.png";

const CarouselCard = ({ content, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = content.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(handleNext, interval);
    return () => {
      clearInterval(timer);
    };
  }, [handleNext, interval]);

  return (
    <Box
      className="animate-bottom"
      w={{ base: "100%", md: "47%" }}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"md"}
      rounded={"md"}
      overflow={"hidden"}
      mx="auto"
      my={3}
    >
      <Box bg={"gray.100"} pos={"relative"}>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={handlePrev}
          aria-label="Next"
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex="2"
        />

        <IconButton
          icon={<ChevronRightIcon />}
          onClick={handleNext}
          aria-label="Next"
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex="2"
        />

        <Image
          src={content[currentIndex].imageUrl}
          layout={"fill"}
          height="450px"
          w="100vw"
          objectFit="cover"
        />
      </Box>

      <Stack bg="purple">
        <Text textAlign="Center" color="white" py={3}>
          {content[currentIndex].note}
        </Text>

        <Box p={4} display="flex" justifyContent="center">
          {Array.from({ length: totalSlides }, (_, index) => (
            <Box
              key={index}
              as="span"
              bg={index === currentIndex ? "white" : "yellow.500"}
              mx={1}
              w={2}
              h={2}
              zIndex={1}
              borderRadius="full"
              display="inline-block"
            ></Box>
          ))}
          <Link href="">
            <Button position="absolute" right={5} bottom={3} px={4}>
              Buy
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

const ShortsCard = () => {
  const content = [
    {
      imageUrl: image1,
      note: "Black Short",
    },
    {
      imageUrl: image2,
      note: "Purple Short",
    },
    {
      imageUrl: image3,
      note: "White Short",
    },

    {
      imageUrl: image4,
      note: "Purple Pant",
    },
    {
      imageUrl: image5,
      note: "White Pant",
    },
  ];

  const interval = 1000; // Transition interval in milliseconds

  return <CarouselCard content={content} interval={interval} />;
};

export default ShortsCard;
