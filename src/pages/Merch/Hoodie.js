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
import image1 from "../../assets/hoodie 3.jpg";
import image2 from "../../assets/hoodie white and purple.jpg";
import image3 from "../../assets/sweatshirt 1.jpg";
import image4 from "../../assets/sweatshirt gold chest.jpg";
import image5 from "../../assets/sweatshirt gold.jpg";
import image6 from "../../assets/sweatshirt more white.jpg";
import image7 from "../../assets/sweatshirt purple chesrt.jpg";
import image8 from "../../assets/sweatshirt purple.jpg";

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

const HoodieCard = () => {
  const content = [
    {
      imageUrl: image1,
      note: "Hoodie",
    },
    {
      imageUrl: image2,
      note: "White and purple Hoodie",
    },
    {
      imageUrl: image3,
      note: "Sweatshirt",
    },

    {
      imageUrl: image4,
      note: "Gold Sweatshirt",
    },
    {
      imageUrl: image5,
      note: "Gold Sweatshirt v2",
    },
    {
      imageUrl: image6,
      note: " White Sweatshirt",
    },

    {
      imageUrl: image7,
      note: "Purple Sweatshirt",
    },
    {
      imageUrl: image8,
      note: "Purple Sweatshirt v2",
    },
  ];

  const interval = 1000; // Transition interval in milliseconds

  return <CarouselCard content={content} interval={interval} />;
};

export default HoodieCard;
