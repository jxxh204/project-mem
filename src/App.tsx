import AppWrapper from "./components/AppWrapper";
import Bottom from "./components/InputArea";

// import Login from "./components/Login";
import Toggle from "./components/Toggle";
import Body from "./components/Body";
// import { useEffect, useState } from "react";

function App() {
  return (
    <AppWrapper>
      <Toggle />

      {/* {!isLogin ? <Login /> : null} */}
      {/* Head / Body로 나누어야할지? */}
      <Body />

      {/* {isLogin ? ( */}
      <Bottom>
        <Bottom.Input />
        <Bottom.Profile />
      </Bottom>
      {/* ) : null} */}
    </AppWrapper>
  );
}

export default App;
