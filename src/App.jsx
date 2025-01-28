import React from "react";
import ThemeContextProvider from "./context/ThemeContextProvider";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./layouts/Header";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <LandingPage />
      </ThemeContextProvider>
    </>
  );
};

export default App;
