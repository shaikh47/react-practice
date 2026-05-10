/**
 * Theme Toggle Component
 * Simple switch to toggle between light and dark theme
 */

import React from "react";
import { useTheme } from "@/features/theme";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-900 transition"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <span className="text-sm font-medium">
        {theme === "light" ? "☀️ Light" : "🌙 Dark"}
      </span>
    </button>
  );
};
