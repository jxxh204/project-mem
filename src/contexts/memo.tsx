import { ReactNode, createContext, useContext, useState } from "react";

type ContextType = {
  tempText: string[];
  saveText: Array<string>[];
  addTempText: (text: string) => void;
  addSaveText: (text: string[]) => void;
};
const MemoContext = createContext<ContextType | null>(null);

function MemoProvider({ children }: { children: ReactNode }) {
  const [tempText, setTempText] = useState<string[]>([]);
  const [saveText, setSaveText] = useState<Array<string>[]>([]);
  const addTempText = (text: string) => {
    setTempText([...tempText, text]);
  };
  const addSaveText = (textArray: string[]) => {
    setTempText([]);
    setSaveText([...saveText, textArray]);
    console.log(textArray, saveText);
  };

  return (
    <MemoContext.Provider
      value={{ tempText, addTempText, saveText, addSaveText }}
    >
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

export { MemoProvider, useMemoContext, MemoContext };
