import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme.ts";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import { ToggleProvider } from "./contexts/toggle.tsx";
import { MemoProvider } from "./components/Memo/useContext.tsx";
import { SearchProvider } from "./components/Search/useContext.tsx";

if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser.ts");
  worker.start();
}

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
