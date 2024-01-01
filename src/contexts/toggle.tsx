import { createContext, useContext, useState } from "react";

//false : 메모, true : 검색
// type Toggle = "login" | "memo" | "search";
type ToggleType = {
  toggle: boolean;
  handleClickToggle: React.MouseEventHandler<HTMLElement>;
};

const ToggleContext = createContext<ToggleType | null>(null);

function ToggleProvider({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState<boolean>(false);
  //false : 메모, true : 검색

  const handleClickToggle = () => {
    setToggle(!toggle);
  };
  return (
    <ToggleContext.Provider value={{ toggle, handleClickToggle }}>
      {children}
    </ToggleContext.Provider>
  );
}
function useToggleContext() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggleContext error");
  }
  return context;
}

export { ToggleProvider, useToggleContext };
