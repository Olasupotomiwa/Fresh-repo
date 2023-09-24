import {
  FormControl,
  FormLabel,
  Select,

} from "@chakra-ui/react";
import React, { useState  } from "react";
import locationData from "../../pages/SignUp/LocationArray";







const UpdateLocation = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
const [selectedState, setSelectedState] = useState("");
const [selectedCity, setSelectedCity] = useState("");


const handleCountryChange = (event) => {
  const selectedCountry = event.target.value;
  setSelectedCountry(selectedCountry);
  setSelectedState("");
  setSelectedCity("");
 
};

const handleStateChange = (event) => {
  setSelectedState(event.target.value);
  setSelectedCity("");

};

const handleCityChange = (event) => {
  setSelectedCity(event.target.value);
 
};

// Create arrays of countries, states, and cities based on the selected values
const countries = locationData.map((data) => data.country);
const states =
  locationData
    .find((data) => data.country === selectedCountry)
    ?.states.map((state) => state.state) || [];
const cities =
  locationData
    .find((data) => data.country === selectedCountry)
    ?.states.find((state) => state.state === selectedState)?.cities || [];

  return (
    <>
      <FormControl fontFamily="clash grotesk" py={6}>
        <FormLabel  color="#ffffff">Update country of residence</FormLabel>
        <Select
          borderColor="#808080"
          borderRadius="12px"
          color="#808080"
          bg='#121212'
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
       
       
      </FormControl>

      <FormControl my={4} fontFamily="clash grotesk">
        <FormLabel color="#ffffff">Update State:</FormLabel>
        <Select
          borderColor="#808080"
          borderRadius="12px"
          color="#808080"
          bg='#121212'
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
      </FormControl>

      <FormControl my={4} fontFamily="clash grotesk">
        <FormLabel color="#ffffff">Update LGA</FormLabel>
        <Select
          borderColor="#808080"
          borderRadius="12px"
          color="#808080"
          bg='#121212'
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
      </FormControl>
    </>
  );
};

export default UpdateLocation
