const currencyOptions = [
    { code: 'USD', image: 'url_to_usd_image' },
    { code: 'EUR', image: 'url_to_eur_image' },
    { code: 'GBP', image: 'url_to_gbp_image' },
    // Add more currencies as needed
  ];
  import { Box, Select, Image } from '@chakra-ui/react';

  function CurrencyDropdown() {
    return (
      <Box display="flex" alignItems="center">
        <Image src={currencyOptions[0].image} alt={currencyOptions[0].code} w={6} h={6} mr={2} />
        <Select defaultValue={currencyOptions[0].code}>
          {currencyOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.code}
            </option>
          ))}
        </Select>
      </Box>
    );
  }
  
  export default CurrencyDropdown;
    