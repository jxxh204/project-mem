import { ReactNode, createContext, useContext, useState } from "react";

type ContextType = {
  tempText: string[];
  addTempText: (text: string) => void;
};
const MemoContext = createContext<ContextType | null>(null);

function MemoProvider({ children }: { children: ReactNode }) {
  const [tempText, setTempText] = useState<string[]>([]);
  const addTempText = (text: string) => {
    setTempText([...tempText, text]);
  };

  return (
    <MemoContext.Provider value={{ tempText, addTempText }}>
      {children}
    </MemoContext.Provider>
  );
}
function useMemoContext() {
  const context = useContext(MemoContext);
  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}

export { MemoProvider, useMemoContext };
