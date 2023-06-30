import { Text, Flex, Link, Box, Heading } from "@chakra-ui/react";
import { ArticleArray } from "./Blog";

const OtherStories = () => {
  return (
    <div>
      <Heading size="md" mt={1} mb={10}>
        Other Stories
      </Heading>
      {ArticleArray.map((item, index) => (
        <Box key={index} py={4} width="250px" boxShadow="md">

          <Flex pb={2}>

            <Text px={3} color="purple" fontSize="12px">
              Sigma club
            </Text>

            <Text fontSize="12px">{item.Time}</Text>

            <Text px={3} fontSize="12px">
              {item.Date}
            </Text>

          </Flex>

          <Text px={3} fontSize="sm">
            {item.title}
          </Text>

          <Link href={`/blogs/${item.id}`} Align="right">

            <Text textAlign="right" px={3} textDecoration="underline">
              View
            </Text>

          </Link>
          
        </Box>
      ))}
    </div>
  );
};
export default OtherStories;
