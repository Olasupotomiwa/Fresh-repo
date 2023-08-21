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
    title: "How can I make money on Trendit³?",
    content: "You can make money on our platform by selling your products, reselling products from other vendors, reposting ads for businesses, carrying out engagement tasks such as following an account, liking a post and so much more!",
  },
  {
    title: "How can Trendit³ help my business ? ",
    content:
      "As a business owner you can get our users to help grow your social accounts organically, engage with your posts, and repost your adverts. You can also sell your products and services on our platform.",
  },
  {
    title: "How can I get paid?",
    content:
      "When your completed tasks are approved by the creator of the task you get paid into your Trendit wallet. From your Trendit wallet, you can withdraw directly to your bank account.",
  },
  {
    title: "Are the users here authentic?",
    content:
      "All users on our platform are verified before they can be allocated tasks, our users all have a minimum of 1000 followers on their social accounts to even qualify for our social tasks.",
  },
   {
    title: "How can I grow my social media presence using Trendit³ ?",
    content:
      "You can grow your social accounts as a business or individual using our platform by creating social engagement tasks for our users to carry out. You can also get quicker results by purchasing real followers and engagement from us.",
  },
  {
    title: "How do I pay users to carry out tasks for me?",
    content:
      "When you create an account on our platform, you’ll have access to a virtual wallet that you can fund with money from your bank account, you can pay users for completing tasks for you from your wallet balance, you can also pay them from your own earnings gotten from tasks you have completed and have received payment for.",
  }
 
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
      <Accordion allowMultiple borderColor='#808080'>
        {accordionData.map((item, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="16px" color="#CB29BE" />
                    ) : (
                      <AddIcon fontSize="16px" color="#CB29BE" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      ml={5}
                      color="white"
                      py={3}
                    >
                      {item.title}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel py={4} color="white">
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
