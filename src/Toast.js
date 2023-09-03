import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
const ToastProvider = ({ children }) => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
  
    useEffect(() => {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
  
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
  
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);
  
    return (
      <ChakraProvider>
        <Box>
          {isOnline ? (
            children
          ) : (
            <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="100vh">
              <AlertIcon boxSize="6" />
              <AlertDescription mt={4}>Not Connected to Internet</AlertDescription>
            </Alert>
          )}
        </Box>
      </ChakraProvider>
    );
  };
  export default ToastProvider
  