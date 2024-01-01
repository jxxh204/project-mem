import AppWrapper from "./components/AppWrapper";
import Bottom from "./components/InputArea";

// import Login from "./components/Login";
import Save from "./components/Memo/Save";
import Memo from "./components/Memo";
import Temp from "./components/Memo/Temp";
import Toggle from "./components/Toggle";
import Search from "./components/Search";
import { useToggleContext } from "./contexts/toggle";
// import { useEffect, useState } from "react";

function App() {
  const context = useToggleContext();
  // const [isLogin, setIsLogin] = useState(false);

  // // isLogin은 login이 제대로 적용된 뒤에 다시 리팩토링하자.
  // useEffect(() => {
  //   const queryString = window.location.search; // Returns:'?q=123'
  //   // Further parsing:
  //   const params = new URLSearchParams(queryString);
  //   const code = params.get("code"); // is the number 123
  //   if (code) setIsLogin(true);
  // }, []);

  return (
    <AppWrapper>
      <Toggle />

      {/* {!isLogin ? <Login /> : null} */}
      {/* Body */}
      {context.toggle ? (
        <Search></Search>
      ) : (
        <Memo>
          <Save />
          <Temp />
        </Memo>
      )}

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
