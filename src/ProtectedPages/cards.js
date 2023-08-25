import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Heading, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
} from "@chakra-ui/react";

const cardContent = [
  {
    icon: "solar:hand-money-bold",
    header: "Earn",
    content:
      "Earn by carrying out simple social media tasks for businesses and individuals or by reselling their products.",
    text: "Start earning",
    to: "/earn",
    isFirstCard: true,
  },
  {
    icon: "healthicons:money-bag",
    header: "Advertise",
    content:
      "Get real people with active followers to help repost your ads and carry out other social media tasks you create on our platform.",
    text: "Start advertising",
    to: "/advertise",
  },
  {
    icon: "ion:person-sharp",
    header: "Sell",
    content:
      "Advertise your products directly to the traffic on our platform or get our active users to resell your products for you.",
    text: "Start selling",
    to: "/market-place2",
  },
];

const Card = ({ icon, header, content, text, to, isFirstCard }) => {
  const [showModal, setShowModal] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    if (isFirstCard && showModal) {
      openModal();
    } else {
      // Redirect to the link or close the modal
      setShowModal(false);
      if (!isFirstCard) {
        window.location.href = to;
      } else {
        closeModal();
      }
    }
  };

  useEffect(() => {
    if (showSecondModal) {
      closeModal();
    }
  }, [showSecondModal]);

  const openSecondModal = () => {
    setShowSecondModal(true);
  };

  const closeSecondModal = () => {
    setShowSecondModal(false);
  };

  return (
    <Box
      bg="#121212"
      p={4}
      shadow="md"
      borderRadius="md"
      width={{ base: "85%", md: "300px" }}
      height="300px"
      mx="auto"
      my={4}
    >
      <Box alignItems="center" p={1}>
        <Box
          bg="#222222"
          w={10}
          h={10}
          borderRadius="md"
          marginRight={4}
          mt={2}
          mb={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <iconify-icon
            icon={icon}
            style={{ color: "#808080" }}
            width="30"
          ></iconify-icon>
        </Box>
        <Box>
          <Heading
            as="h2"
            size="md"
            display="flex"
            mt={0}
            mb={1}
            color=" #CB29BE"
            fontFamily="Clash Grotesk"
            fontWeight="600"
          >
            {header}
          </Heading>
          <Text fontSize="15px" py={0} letterSpacing="0.369px" color="#808080">
            {content}
          </Text>
        </Box>
      </Box>
      <Button
        width="full"
        rounded="full"
        bg="#cb29be"
        fontWeight="400"
        color="white"
        mt={3}
        mb={5}
        onClick={handleButtonClick}
        _hover={{
          bg: "#CB29BE",
          color: "white",
          opacity: "0.9",
        }}
      >
        {text}
        <ArrowForwardIcon ml={3} />
      </Button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} size={{base: 'sm', md: 'md'}} isCentered>
        <ModalOverlay />
        <ModalContent
          bg="black"
          border="1px"
          borderColor="#808080"
          borderRadius="25px"
          fontFamily="clash grotesk"
          p={{base: '0', md: '6'}}
        >
          <ModalHeader
            color="white"
            textAlign="center"
            fontWeight="400"
            fontSize="25px"
          >
            Unlock earning
          </ModalHeader>
          <ModalCloseButton
            bg="#808080"
            rounded="full"
            position="absolute"
            top="-8px"
            right="-5px"
          />
          <ModalBody color="#808080">
            <Text textAlign="center">
              A{" "}
              <span style={{ color: "#CB29BE", fontWeight: "600" }}>
                {" "}
                one time{" "}
              </span>{" "}
              fee of{" "}
              <span style={{ color: "#CB29BE", fontWeight: "600" }}>
                {" "}
                $10{" "}
              </span>{" "}
              for account activation and membership is required in other to
              acess all earning tasks on our platform. Pay now and start
              maximizing your income potential with your social accounts
            </Text>
          </ModalBody>
          <Button
            width="200px"
            rounded="full"
            bg="#cb29be"
            fontWeight="400"
            color="white"
            mt={3}
            mx="auto"
            mb={8}
            onClick={openSecondModal}
            _hover={{
              bg: "#CB29BE",
              color: "white",
              opacity: "0.9",
            }}
          >
            Pay now
          </Button>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={showSecondModal}
        onClose={closeSecondModal}
        size={{base: 'sm', md: 'md'}}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          bg="black"
          border="1px"
          borderColor="#808080"
          borderRadius="25px"
          fontFamily="clash grotesk"
          px={{base: '0', md: '6'}}
        >
          <ModalHeader
            color="white"
            textAlign="center"
            fontWeight="400"
            fontSize="25px"
          >
            <Center>
              <iconify-icon
                icon="solar:verified-check-bold"
                style={{ color: "#CB29BE" }}
                mx="auto"
                justifyContent="center"
                alignItems="center"
                width="80"
              ></iconify-icon>
            </Center>
          </ModalHeader>
          <ModalCloseButton
            bg="#808080"
            rounded="full"
            position="absolute"
            top="-8px"
            right="-5px"
          />
          <ModalBody
            color="#808080"
            mx="auto"
            fontFamily="clash grotesk"
            textAlign="center"
          >
            {/* Content for the second modal */}
            <Heading color="white" fontWeight="400" fontSize="24px" fontFamily='clash grotesk'>
              Payment successful
            </Heading>
            <Text textAlign="center" py={5}>
              Your Trendit account is now fully activated for earning. You can
              now start earning from our adverts and engagement tasks
            </Text>
          </ModalBody>
          <Button
            width="200px"
            rounded="full"
            bg="#cb29be"
            fontWeight="400"
            color="white"
            mt={3}
            mx="auto"
            mb={8}
            as={Link}
            to='/earn'
            onClick={closeSecondModal} // Close the second modal
            _hover={{
              bg: "#CB29BE",
              color: "white",
              opacity: "0.9",
            }}
          >
           Get started
          </Button>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const CardsSection = () => {
  // State variable to control the modal visibility
  const [showModal, setShowModal] = useState(false);

  return (
    <Box my={5}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "space-around" }}
        justifyContent="center"
        wrap="wrap"
        fontFamily="Clash Grotesk"
      >
        {cardContent.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            header={card.header}
            content={card.content}
            text={card.text}
            to={card.to}
            showModal={showModal}
            setShowModal={setShowModal}
            isFirstCard={card.isFirstCard}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default CardsSection;
