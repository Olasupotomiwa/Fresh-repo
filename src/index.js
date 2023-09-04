import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store, persistor } from './Redux-files/store';
import { PersistGate } from 'redux-persist/integration/react';


const theme = extendTheme({
  colors: {
    brand: {
      purple: "#8F19E7",
      gold: "#FEB804",
      text_black: "#1C1C1C",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
     
        <App />
       
        </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);
