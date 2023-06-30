import {
  Box,
  Link,
  Image,
  Text,
  Stack,
  useColorModeValue,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import { useState, useEffect, useCallback } from "react";
import image1 from "../../assets/t shirt front with fela.jpg";
import image2 from "../../assets/t shirt with Havanna Flter.jpg";

import image4 from "../../assets/T-shirt purple headart.png";
import image5 from "../../assets/T-shirt purple sigma club text with art on sleeves.png";
import image7 from "../../assets/T-shirt white headart.png";
import image8 from "../../assets/T-shirt white sigma club text with art.png";
import image9 from "../../assets/TShirt_purple and white.png";

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
          fontSize={28}
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
          fontSize={28}
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
          <Link
            href="https://wa.me/2349030883078?text=Hi%2C%20I%27m%20interested%20in%20the%20Sigma%20________
"
          >
            <Button position="absolute" right={5} bottom={3} px={4}>
              Buy
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

const ShirtCard = () => {
  const content = [
    {
      imageUrl: image1,
      note: "T-Shirt With Fela Potrait",
    },
    {
      imageUrl: image2,
      note: "Havanna T-Shirt",
    },

    {
      imageUrl: image4,
      note: "Purple Shirt V1",
    },
    {
      imageUrl: image5,
      note: "Purple Shirt v2",
    },
    {
      imageUrl: image9,
      note: "Purple T-Shirt v3",
    },

    {
      imageUrl: image8,
      note: "White T-Shirt v1",
    },

    {
      imageUrl: image7,
      note: "White T-Shirt v2",
    },
  ];

  const interval = 2000; // Transition interval in milliseconds

  return <CarouselCard content={content} interval={interval} />;
};

export default ShirtCard;
