import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Container,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Blog = ({ image, title, article, id, Date, Time }) => {
  return (
    <Container maxW="container.xlg" m="auto">
      <Card
        direction={{ sm: "column", md: "row" }}
        overflow="hidden"
        shadow="md"
        bg="teal.100"
        mb={9}
        rounded="xl"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", md: "300px" }}
          src={image}
          alt="article-img"
          rounded="xl"
        />

        <Stack>
          <CardBody>
            <Flex pb={5}>
              <Text px={3} color="purple" fontSize="sm">
                Sigma club
              </Text>
              <Text px={3} fontSize="sm">
                {" "}
                Last updated {Time}
              </Text>
              <Text px={3} fontSize="sm">
                {Date}
              </Text>
            </Flex>

            <Heading size="md">{title}</Heading>

            <Text py="2" className="article">
              {article}
            </Text>
          </CardBody>

          <CardFooter>
            <Button
              fontWeight={600}
              color={"white"}
              bg={"purple"}
              _hover={"brand.purple"}
              ml="auto"
            >
              <Link to={`/blogs/${id}`}>Read More</Link>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Container>
  );
};
export default Blog;
