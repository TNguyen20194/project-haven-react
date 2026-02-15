import { useTheme } from "../../../hooks/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle rounded-full"
      type="button"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        // SUN
        <Sun className="w-5 h-5 theme-icon" />
      ) : (
        // MOON
        <Moon className="w-5 h-5 theme-icon" />
      )}
    </button>
  );
};

export default ThemeToggle;
