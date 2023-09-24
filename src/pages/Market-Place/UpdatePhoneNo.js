import {
  
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Image,
    Input
  } from "@chakra-ui/react";
  import React, { useState  } from "react";
  
  import {
    FormControl,
    FormLabel,
    HStack,
  } from "@chakra-ui/react";
  import NGN from "assets/images/naira.jpg"

const Code =()=>{

    const countryDropdown = [
        {
          label: "  Nigeria",
          imageSrc: NGN,
          countryCode: "+234",
        },
        {
          label: "Kenya",
          imageSrc: "/path-to-image/image2.png",
          countryCode: "+211",
        },
        // Add more options as needed
      ];
      const [userInput, setUserInput] = useState('');
    
      const handleCountryCodeChange = (e) => {
        const input = e.target.value;
        setUserInput(input);
      };
      
     
    
    
      const [selectedCode, setSelectedCode] = useState(countryDropdown[0]); // Initialize with the first option
    
     
    
      const handleOptionSelect = (countryDropdown) => {
        setSelectedCode(countryDropdown);
        setUserInput('')
      };


    return(
        <FormControl fontFamily="clash grotesk" my={4}>
        <FormLabel>Contact info</FormLabel>

        <HStack>
        {/* Dropdown */}
        <Menu>
          <MenuButton as={FormLabel} width="AUTO" mt="3" cursor='pointer'>
            <Flex>
              <Image
                src={selectedCode.imageSrc} // Make sure this is correct
                alt={selectedCode.label}
                boxSize="30px"
                mr={2}
                rounded="full"
              />
              {selectedCode.countryCode}
            </Flex>
          </MenuButton>
          <MenuList>
            {countryDropdown.map((code) => (
              <MenuItem
                key={code.label}
                onClick={() => handleOptionSelect(code)}
              >
                <Flex align="center" color="#808080">
                  <Image
                    src={code.imageSrc} // Use code.imageSrc for the image source
                    alt={code.label}
                    boxSize="30px"
                    mr="2"
                    rounded="full"
                  />
                  {code.label} {code.countryCode}
                </Flex>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        {/* Input box with pre-filled country code */}
        <FormControl>
          <Input 
            value={userInput}
            type="number"
           onChange={handleCountryCodeChange} 
          />
        </FormControl>
      </HStack>
      </FormControl>
    )
}
export default Code