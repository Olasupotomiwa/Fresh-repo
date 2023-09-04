<Box color='#808080'>
<FormControl fontFamily="clash grotesk" my={4}>
  <FormLabel>Select your current location</FormLabel>
  <Select
    borderColor="#808080"
    borderRadius="12px"
    value={selectedCountry}
    onChange={handleCountryChange}
  >
    <option value="">Select Country</option>
    {countries.map((country) => (
      <option key={country} value={country}>
        {country}
      </option>
    ))}
  </Select>
  <Text fontSize="sm">
    This helps us recommend your product/service to buyers/resellers
    near you.
  </Text>
  {countryError && <Text color="#CB29BE">{countryError}</Text>}
</FormControl>

<FormControl my={4} fontFamily="clash grotesk">
  <FormLabel>State:</FormLabel>
  <Select
    borderColor="#808080"
    borderRadius="12px"
    value={selectedState}
    onChange={handleStateChange}
  >
    <option value="">Select State</option>
    {states.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ))}
  </Select>
  {stateError && <Text color="#CB29BE">{stateError}</Text>}
</FormControl>

<FormControl my={4} fontFamily="clash grotesk">
  <FormLabel color="#808080">Local Government Area</FormLabel>
  <Select
    borderColor="#808080"
    borderRadius="12px"
    value={selectedCity}
    onChange={handleCityChange}
  >
    <option value="">Select City</option>
    {cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </Select>

  {cityError && <Text color="#CB29BE">{cityError}</Text>}
</FormControl>
</Box>
