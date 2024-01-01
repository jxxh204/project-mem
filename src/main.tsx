import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme.ts";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import { ToggleProvider } from "./contexts/toggle.tsx";
import { MemoProvider } from "./contexts/memo.tsx";
import { SearchProvider } from "./contexts/search.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <ToggleProvider>
        <MemoProvider>
          <SearchProvider>
            <GlobalStyle />
            <App />
          </SearchProvider>
        </MemoProvider>
      </ToggleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
