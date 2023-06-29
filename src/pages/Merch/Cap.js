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
import image1 from "../../assets/cap_black.png";
import image2 from "../../assets/cap_purple and gold v2.png";
import image3 from "../../assets/cap_purple and gold.png";
import image4 from "../../assets/cap_white.png";
import image5 from "../../assets/pueple cap.jpg";
import image6 from "../../assets/HatGold.png";
import image7 from "../../assets/gold cap alternate v.jpg";

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

const CapCard = () => {
  const content = [
    {
      imageUrl: image1,
      note: "Black Cap",
    },
    {
      imageUrl: image2,
      note: "Purple and gold",
    },
    {
      imageUrl: image3,
      note: "Purple and gold v2",
    },

    {
      imageUrl: image4,
      note: "White Cap",
    },
    {
      imageUrl: image5,
      note: "Purple Cap",
    },
    {
      imageUrl: image6,
      note: "Gold Hat",
    },

    {
      imageUrl: image7,
      note: "Gold Cap",
    },
  ];

  const interval = 10000; // Transition interval in milliseconds

  return <CarouselCard content={content} interval={interval} />;
};

export default CapCard;
