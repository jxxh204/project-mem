import AppWrapper from "./components/AppWrapper";
import Bottom from "./components/Bottom";

import Login from "./components/Login";
import Save from "./components/Memo/Save";
import Memo from "./components/Memo";
import Temp from "./components/Memo/Temp";
import Toggle from "./components/Toggle";
import { MemoProvider } from "./contexts/memo";

function App() {
  return (
    <AppWrapper>
      <MemoProvider>
        <Toggle />
        <Login />
        {/* 메모로 감쌀필요가 있을지. */}
        <Memo>
          <Temp />
          <Save />
        </Memo>

        <Bottom>
          <Bottom.Input />
          <Bottom.Profile />
        </Bottom>
      </MemoProvider>
    </AppWrapper>
  );
}

export default App;
