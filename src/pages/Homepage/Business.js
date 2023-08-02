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
      width={{ base: "70%", md: "300px" }}
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
          <Box
           
            w={8}
            h={8}
            borderRadius="md"
            marginRight={4}
            mt={0}
          >
            <ion-icon name={icon}></ion-icon>
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

const ResponsiveCardCarousel = () => {
  const data = [
    {
      header: "Advertise",
      content:
        "Post ads and other content that you want users to promote on their social media accounts. You can also post surveys & lots more!",
      icon: "heart",
    },
    {
      header: "Get engagement",
      content:
        "Grow your business accounts organically by getting real users to follow and engage with your content.",
      icon: "heart",
    },
    {
      header: "Sell",
      content:
        "Advertise and sell your products in our marketplace. Our users can also help you sell your products for a small cut on each sale.",

      icon: "heart",
    },

    {
      header: "Quick results",
      content:
        "Achieve your social media goals quickly and efficiently by purchasing real and authentic followers and engagement!",

      icon: "heart",
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

export default ResponsiveCardCarousel;
