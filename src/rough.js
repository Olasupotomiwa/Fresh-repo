// ... (other imports and code)

const ForgotPasswordPage = () => {
    // ... (other state variables)
  
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isPasswordValid, setPasswordValid] = useState(true);
  
    const [isButtonClicked, setIsButtonClicked] = useState(false); // Add this line
    const [passwordsMatch, setPasswordsMatch] = useState(true); // Add this line
  
    const [newPasswordValue, setNewPasswordValue] = useState(""); // Define newPasswordValue
  
    const handleTogglePasswordVisibility = () => {
      setPasswordVisible(!isPasswordVisible);
    };
  
    const handleNewPasswordChange = (event) => {
      const newPasswordValue = event.target.value;
      setNewPassword(newPasswordValue);
      setNewPasswordValue(newPasswordValue); // Set newPasswordValue
  
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
      const isVali = passwordRegex.test(newPasswordValue);
    
  
      // Set password validation only when the button is clicked
      if (isButtonClicked) {
        setPasswordValid(isValid);
      }
    };
  
    const handleConfirmPasswordChange = (event) => {
      const confirmPasswordValue = event.target.value;
      setConfirmPassword(confirmPasswordValue);
  
      // Set passwords match validation only when both passwords are entered
      if (isButtonClicked) {
        setPasswordsMatch(newPasswordValue === confirmPasswordValue); // Use newPasswordValue
      }
    };
  
    const handleVerifyButton = () => {
      setIsButtonClicked(true); // Set the button as clicked
  
      // ... (other verification logic)
    };
  
    // ... (other functions and code)
  
    return (
      // ... (other JSX code)
  
      {currentStep === 3 && (
        <>
          {/* ... (other form elements) */}
  
          <FormControl>
            <FormLabel>New Password</FormLabel>
            <InputGroup>
              <Input
                type={isPasswordVisible ? "text" : "password"}
                value={newPassword}
                onChange={handleNewPasswordChange}
                borderColor="#808080"
                borderRadius="12px"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleTogglePasswordVisibility}
                  bg="black"
                  _hover={{ bg: "inherit" }}
                  _active={{ bg: "inherit" }}
                >
                  {isPasswordVisible ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              borderColor="#808080"
              borderRadius="12px"
            />
          </FormControl>
          {!isPasswordValid && isButtonClicked && (
            <Text color="red.500" mt={2}>
              Password must contain at least one digit and one special character.
            </Text>
          )}
          {!passwordsMatch && isButtonClicked && (
            <Text color="red.500" mt={2}>
              Passwords do not match.
            </Text>
          )}
          <Button
            mt={6}
            bg="#CB29BE"
            onClick={handleVerifyButton}
            _hover={{ bg: "#CB29BE", opacity: "0.9" }}
            rounded="25px"
            width="full"
            isDisabled={!isPinFilled() || !isPasswordValid || !passwordsMatch}
          >
            Reset Password
          </Button>
          <Button
            mt={3}
            variant="link"
            color="#CB29BE"
            onClick={handlePreviousStep}
          >
            Previous
          </Button>
        </>
      )}
  
      {/* ... (other JSX code) */}
    );
  };
  
  export default ForgotPasswordPage;
  