import React from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const accordionData = [
  {
    title: "Section 1 title",
    content: "Content for Section 1 goes here.",
  },
  {
    title: "Section 2 title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  // Add more sections as needed
];

const AccordionComponent = () => {
  return (
    <Box
      w={{ base: "100%", md: "75%", lg: "70%" }}
      m="auto"
      p={{ base: "3", md: "8" }}
      fontFamily="Clash Grotesk"
    >
      <Heading
        textAlign="center"
        fontWeight="500"
        p={15}
        fontSize="24px"
        color="white"
        fontFamily="Clash Grotesk"
      >
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple borderColor='"#808080"'>
        {accordionData.map((item, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" color="#CB29BE" />
                    ) : (
                      <AddIcon fontSize="12px" color="#CB29BE" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      ml={5}
                      color="white"
                    >
                      {item.title}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="white">
                  {item.content}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default AccordionComponent;
