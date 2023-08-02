import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  Heading,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Card = ({ header, content, icon }) => {
  return (
    <Box
      px={{ base: "0", md: "4" }}
      borderRadius="md"
      width={{ base: "100%", md: "300px" }}
      height="220px"
      my={4}
    >
      <Flex>
        {/* Add the vertical line here */}
        <Divider
          my={4}
          bg="white.800"
          height="170px"
          mr={2}
          px={1}
          orientation="vertical"
        />

        <Box mt={3} width="100%">
          <Box w={8} h={8} borderRadius="md" marginRight={4} mt={0}>
            <iconify-icon
              icon={icon}
              style={{ color: "#808080" }}
              width="22"
            ></iconify-icon>
          </Box>

          <Box>
            <Heading
              as="h2"
              size="md"
              display="flex"
              mt={8}
              mb={1}
              color="white"
              fontWeight="500"
              fontFamily="Clash Grotesk"
            >
              {header}
            </Heading>
            <Text fontSize="sm" py={0} color="#808080">
              {content}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const CarouselIndicator = ({ active }) => {
  const indicatorStyles = {
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    backgroundColor: active ? "blue.500" : "gray.600",
    margin: "0 2px",
    cursor: "pointer",
  };

  return <Box as="span" style={indicatorStyles} />;
};

const Earners = () => {
  const data = [
    {
      header: "Repost adverts",
      content:
        "With just few clicks you can help businesses owners reach a wider audience and make more profit by simply reposting their ads",
      icon: "bi:phone-vibrate-fill",
    },
    {
      header: "Engage",
      content:
        "Help accounts grow by following, liking, commenting, re-sharing their posts, subscribing to their channels and so much more!",
      icon: "fluent:people-20-filled",
    },
    {
      header: "Resell",
      content:
        "Help businesses resell their products and start earning with every successful sale you make. Sell more, earn more!",

      icon: "ic:round-sell",
    },

    {
      header: "Reviews & feedback",
      content:
        "Help businesses gain credibility and customer trust by giving valuable feedback on their products and services.!",

      icon: "mdi:chat-alert",
    },

    {
      header: "Take surveys",
      content:
        "Help businesses transform their ideas into reality by completing surveys to help them make more informed decisions.",

      icon: "mdi:note-edit",
    },
  ];

  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const carouselContainerStyle = {
    maxWidth: "100%",
  };

  if (isMobile) {
    return (
      <Center>
        <Box py={4} style={carouselContainerStyle} px={0}>
          <Box>
            <Carousel
              responsive={responsive}
              swipeable
              draggable
              showDots
              infinite
              autoPlay
              autoPlaySpeed={3000}
              customTransition="transform 300ms ease-in-out"
              transitionDuration={300}
              containerClass="carousel-container"
              dotListClass="custom-dot-list"
              dotClass="custom-dot"
              arrows={false} // Remove the next and previous arrows
            >
              {data.map((card, index) => (
                <Card
                  key={index}
                  header={card.header}
                  content={card.content}
                  icon={card.icon}
                />
              ))}
            </Carousel>
          </Box>

          <Flex mt={4}>
            {data.map((_, index) => (
              <CarouselIndicator key={index} active={index === 0} />
            ))}
          </Flex>
        </Box>
      </Center>
    );
  } else {
    return (
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "space-around" }}
        columns={{ sm: 1, md: 3 }}
        justifyContent="center"
        wrap="wrap"
        fontFamily="Clash Grotesk"
      >
        {data.map((card, index) => (
          <Card
            key={index}
            header={card.header}
            content={card.content}
            icon={card.icon}
          />
        ))}
      </Flex>
    );
  }
};

export default Earners;
