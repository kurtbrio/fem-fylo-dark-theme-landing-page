import React from "react";
import ThemeContextProvider from "./context/ThemeContextProvider";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <LandingPage />
        <Footer />
      </ThemeContextProvider>
    </>
  );
};

export default App;
