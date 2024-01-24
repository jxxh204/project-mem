import AppWrapper from "./components/AppWrapper";
import Bottom from "./components/InputArea";

import Toggle from "./components/Toggle";
import Body from "./components/Body";

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
