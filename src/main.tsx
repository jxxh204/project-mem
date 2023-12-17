import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme.ts";
import GlobalStyle from "./styles/GlobalStyle.tsx";
import { ToggleProvider } from "./contexts/toggle.tsx";
import { MemoProvider } from "./contexts/memo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <meta
      name="viewport"
      content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
    />
    <ThemeProvider theme={Theme}>
      <ToggleProvider>
        <MemoProvider>
          <GlobalStyle />
          <App />
        </MemoProvider>
      </ToggleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
