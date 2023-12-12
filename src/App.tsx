import AppWrapper from "./components/AppWrapper";
import Bottom from "./components/Bottom";

import Login from "./components/Login";
import Save from "./components/Memo/Save";
import Memo from "./components/Memo";
import Temp from "./components/Memo/Temp";
import Toggle from "./components/Toggle";
import Search from "./components/Search";
import { useToggleContext } from "./contexts/toggle";

function App() {
  const context = useToggleContext();

  return (
    <AppWrapper>
      <Toggle />
      <Login />
      {/* Body */}
      {!context.toggle ? (
        <Memo>
          <Save />
          <Temp />
        </Memo>
      ) : (
        <Search></Search>
      )}

      <Bottom>
        <Bottom.Input />
        <Bottom.Profile />
      </Bottom>
    </AppWrapper>
  );
}

export default App;
