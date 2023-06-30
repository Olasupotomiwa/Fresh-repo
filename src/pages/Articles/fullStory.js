import { Heading, Text, Image, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ArticleArray } from "./Blog";
import FilterBtn from "./filterbtn";


const FullStory = () => {
  const { id } = useParams();

  const { image, title, article, Date, Time } = ArticleArray.find(
    (article) => article.id === parseInt(id)
  );

  return (
    <>
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
      <Heading size="md" mt={1} mb={10}>
        {title}
      </Heading>
      <Image
        objectFit="cover"
        maxW="100%"
        src={image}
        alt="article-img"
        rounded="md"
      />

      <Text py="2">{article}</Text>
      <FilterBtn />
    </>
  );
};
export default FullStory
