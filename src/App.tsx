import AppWrapper from "./components/AppWrapper";
import Bottom from "./components/Bottom";

import Login from "./components/Login";
import Current from "./components/Memo/Current";
import Memo from "./components/Memo/Memo";
import Prev from "./components/Memo/Prev";
import Toggle from "./components/Toggle";

function App() {
  return (
    <AppWrapper>
      <Toggle />
      <Login />
      {/* 메모로 감쌀필요가 있을지. */}
      <Memo>
        <Prev />
        <Current />
      </Memo>

      <Bottom>
        <Bottom.Input />
        <Bottom.Profile />
      </Bottom>
    </AppWrapper>
  );
}

export default App;
