import { createContext, useContext, useState } from "react";

//false : 메모, true : 검색
// type Toggle = "login" | "memo" | "search";
type ToggleType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleContext = createContext<ToggleType | null>(null);

function ToggleProvider({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
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
