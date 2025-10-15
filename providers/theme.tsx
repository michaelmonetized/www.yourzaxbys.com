"use client";
import { Button } from "@/components/ui/button";
import { MoonIcon } from "lucide-react";
import { SunIcon } from "lucide-react";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
type ThemeContextType = {
  isLight: boolean;
  toggleTheme: () => void;
};

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Props type for the provider component
type ThemeProviderProps = {
  children: ReactNode;
};

const LightTheme = ({
  children,
  toggleTheme,
}: ThemeProviderProps & { toggleTheme: () => void }) => {
  return (
    <body
      id="top"
      className="light bg-background text-foreground m-0 p-0 h-dvh flex flex-col items-stretch justify-items-stretch grow"
    >
      {children}
      <Button
        onClick={toggleTheme}
        className="fixed bottom-xs right-5xl m-md cursor-pointer"
      >
        <span className="sr-only">Toggle Theme</span>
        <SunIcon className="w-4 h-4" />
      </Button>
    </body>
  );
};

const DarkTheme = ({
  children,
  toggleTheme,
}: ThemeProviderProps & { toggleTheme: () => void }) => {
  return (
    <body
      id="top"
      className="bg-background text-foreground m-0 p-0 h-dvh flex flex-col items-stretch justify-items-stretch grow"
    >
      {children}
      <Button
        onClick={toggleTheme}
        className="fixed bottom-xs right-5xl m-md cursor-pointer"
      >
        <span className="sr-only">Toggle Theme</span>
        <MoonIcon className="w-4 h-4" />
      </Button>
    </body>
  );
};

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {isLight ? (
        <LightTheme toggleTheme={toggleTheme}>{children}</LightTheme>
      ) : (
        <DarkTheme toggleTheme={toggleTheme}>{children}</DarkTheme>
      )}
    </ThemeContext.Provider>
  );
};
