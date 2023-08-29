<Container
ml={{ base: 0, md: "25%" }}
px="0"
py={{ base: "7", md: "10" }}
maxW={{ base: "100%", md: "75%" }}
bg="black"
height="100%"
mt="20"
fontFamily="clash grotesk"
>
<Box pt={{base: '0', md: '50'}} px={{ base: "4", md: "10" }}>
  <Heading color="white" fontFamily="clash grotesk" fontSize="25px" fontWeight="600" textAlign={{base: 'center', md: 'left'}}>
    Instagram adverts tasks
  </Heading>
  <Text color="#808080" py={4} textAlign={{base: 'center', md: 'left'}}>
    Our Instagram adverts tasks only require you to download the ad image or video and share it on your Instagram account
  </Text>

  {data.map((item) => (
    <Box key={item.id}>
      {/* Render your data as needed */}
      {/* Modify the following lines to display your data */}
      <Flex
        py='2'
        width={{ base: '100%', md: '100%', lg: '80%' }}
        justifyContent="space-between"
        alignItems="flex-start"
       
      >
        
        <Flex alignItems="flex-start">
        <Image
            src="https://via.placeholder.com/100" // Replace with your image URL
            alt="Image"
            width={{ base: '100px', md: '200px' }}
            height={{ base: '150px', md: '100px' }}
            objectFit="cover"
            mr={{ base: '6px', md: '12px' }}
          />
          {/* Your data display here */}
          <VStack alignItems="flex-start" spacing={8}>
            <Box>
              <Text fontWeight="bold" color='#CB29BE'>Title</Text>
              <Text color='#808080'>Description</Text>
            </Box>
            
            <Text color='#808080'>{item.title}</Text>
          </VStack>
        </Flex>

        <Flex flexDirection="column" alignItems="flex-start" mt="auto" display={{base: 'block', md: 'flex'}}>
          <Text color='#CB29BE' fontWeight='bold' cursor='pointer'>Perform Task <ArrowForwardIcon fontWeight='400' ml={1} /></Text>
        </Flex>
      </Flex>
      <Divider borderColor="#808080" mt={1}  maxW={{ base: "100%", md: "80%" }}/>
    </Box>
  ))}

  <Flex justifyContent="center" mt={4}>
   
    {Array.from({ length: totalPages }, (_, index) => (
      <Button
        key={index + 1}
        colorScheme={index + 1 === currentPage ? 'teal' : '#121212'}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </Button>
    ))}
   
  </Flex>
</Box>
</Container>