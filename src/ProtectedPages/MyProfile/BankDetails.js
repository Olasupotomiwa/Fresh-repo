import React from "react";
import { FormControl, FormLabel, Select, Input } from "@chakra-ui/react";

const BankDetails = () => {
  // Dummy banks data
  const dummyBanks = ["Bank A", "Bank B", "Bank C", "Bank D", "Bank E"];

  return (
    <>
      <FormControl my={4} fontFamily="clash grotesk">
        <FormLabel color="#ffffff">Bank</FormLabel>
        <Select
          borderColor="#808080"
          borderRadius="12px"
          color="#808080"
          bg="#121212"
        >
          <option value="">Select bank</option>

          {/* Map over dummy banks to populate options */}
          {dummyBanks.map((bank, index) => (
            <option key={index} value={bank}>
              {bank}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl my={4} fontFamily="clash grotesk">
        <Input
          placeholder="Enter account number"
          type="number"
          borderColor="#808080"
          borderRadius="12px"
          color="#808080"
          bg="#121212"
        />
      </FormControl>
    </>
  );
};

export default BankDetails;
