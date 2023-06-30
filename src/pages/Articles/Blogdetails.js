
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FullStory from "./fullStory";
import OtherStories from "./OtherStories";
import { Flex, Box } from "@chakra-ui/react";

const Blogdetails = () => {


  return (
    <>
      <Header />
      <Flex m="auto" p={8} flexDirection={{ base: "column", md: "row" }}>
        <Box flex={7} >
         
          <FullStory/>
         
        </Box>

        <Box flex={3}
       
        pl={10}
        pr={0}
        mx='auto'
       
       >
     <OtherStories/>
        
        </Box>
      </Flex>
      <Footer />
    </>
  );
};
export default Blogdetails;
