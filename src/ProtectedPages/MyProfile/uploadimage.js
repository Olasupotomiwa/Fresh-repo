import { Box, HStack, Image, Text, Button } from "@chakra-ui/react";
import { useState } from "react"; // Import useState
import { useSelector } from "react-redux";

const UploadImage = () => {
  const user = useSelector((state) => state.auth.user);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the selected image to be displayed
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setSelectedImage(null); // Clear the selected image
  };

  return (
    <Box
      fontFamily="clash grotesk"
      bg="#121212"
      borderWidth="1px"
     borderRadius='12px'
      borderColor="#808080"
      py={6}
      px={4}
    >
      <HStack gap={5} ml={4}>
        <Box>
          {selectedImage ? (
            <Image
              src={selectedImage}
              rounded="full"
              height="65px"
              width="65px"
              borderWidth="1px"
            />
          ) : (
            <Image
              src={user.Profile_picture}
              rounded="full"
              height="65px"
              width="65px"
              borderWidth="1px"
            />
          )}
        </Box>

        <Box>
          <Text color="#808080" py={1}>
            Image must be 10MB max file size
          </Text>
          <HStack gap={5}>
            <label>
              <Button
                as="span"
                variant="ghost"
                bg="#222222"
                color="white"
                fontWeight="400"
                _hover={{ bg: "inherit" }}
              >
                Upload
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </Button>
            </label>
            <Button
              variant="ghost"
              bg="#222222"
              color="#E12121"
              fontWeight="400"
              onClick={handleImageDelete}
              _hover={{ bg: "inherit" }}
            >
              Delete
            </Button>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default UploadImage;
