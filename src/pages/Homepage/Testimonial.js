import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  Icon,
  IconButton,
  ChakraProvider,
  CSSReset,
  Container,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Card 1",
    content: "Content for Card 1",
  },
  {
    id: 2,
    title: "Card 2",
    content: "Content for Card 2",
  },
  {
    id: 3,
    title: "Card 3",
    content: "Content for Card 3",
  },
  // Add more data as needed
];

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Box position="relative" maxWidth="400px" w="100%" overflow="hidden">
      <Box
        display="flex"
        transition="transform 0.3s ease"
        transform={`translateX(-${currentIndex * 100}%)`} // Sliding effect using translateX
      >
        {items.map((item) => (
          <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            width="100%"
            textAlign="center"
          >
            <Box fontWeight="bold">{item.title}</Box>
            <Box>{item.content}</Box>
          </Box>
        ))}
      </Box>
      <Center mt="4" position="absolute" bottom="0" width="100%">
        <IconButton
          aria-label="Previous Slide"
          icon={<Icon as={FaChevronLeft} />}
          onClick={handlePrevClick}
          marginLeft="-40px"
        />
        <IconButton
          aria-label="Next Slide"
          icon={<Icon as={FaChevronRight} />}
          onClick={handleNextClick}
          marginRight="-40px"
        />
      </Center>
    </Box>
  );
};


export default Carousel;
