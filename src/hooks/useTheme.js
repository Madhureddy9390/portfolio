import { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext.jsx";

export const useTheme = () => useContext(ThemeContext);
