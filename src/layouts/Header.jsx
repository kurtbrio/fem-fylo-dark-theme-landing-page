import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full bg-email-bg flex justify-between items-center overflow-hidden p-5 lg:pt-10 lg:pb-0 lg:px-15">
      <div className="w-20 lg:w-36">
        <img src="/logo/logo.svg" alt="Fylo Logo" />
      </div>
      <ul className="flex justify-between gap-5">
        <li>Features</li>
        <li>Team</li>
        <li>Sign In</li>
        <li className="text-custom-white">
          <button onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
