import { useState, useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FlagList from "./components/FlagList";
import FlagDetail from "./components/FlagDetail";

import GlobalStyle from "./assets/wrappers/Global";

const queryClient = new QueryClient();

const theme = {
  dark: {
    elements: "hsl(209, 23%, 22%)",
    text: "hsl(0, 0%, 100%)",
    background: "hsl(207, 26%, 17%)",
  },
  light: {
    elements: "hsl(0, 0%, 100%)",
    text: "hsl(200, 15%, 8%)",
    background: "hsl(0, 0%, 98%)",
    input: "hsl(0, 0%, 52%)",
  },
};

export type ThemeType = typeof theme.dark;

const App = () => {
  const [themeColor, setThemeColor] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("themeColor");
    if (savedTheme && ["light", "dark"].includes(savedTheme)) {
      setThemeColor(savedTheme);
    }
  }, []);

  const changeTheme = () => {
    if (themeColor === "dark") {
      setThemeColor("light");
    } else {
      setThemeColor("dark");
    }
    localStorage.setItem("themeColor", themeColor);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeColor === "light" ? theme.light : theme.dark}>
        <GlobalStyle />
        <BrowserRouter>
          <Header themeColor={themeColor} changeTheme={changeTheme} />
          <Routes>
            <Route path="/" element={<FlagList />} />
            <Route path="/:country" element={<FlagDetail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
