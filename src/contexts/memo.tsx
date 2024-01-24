import { ReactNode, createContext, useContext, useState } from "react";

type ContextType = {
  onChangeInput: <T>(e: React.ChangeEvent<T>) => void;
  text: string;
  addTemp: <T>(e: React.FormEvent<T>) => void;
  tempText: string[];
  saveText: Array<string>[];
  onEnterTemp: React.MouseEventHandler<HTMLButtonElement>;
  keyDownHandler: (e: React.KeyboardEvent) => void;
};
const MemoContext = createContext<ContextType | null>(null);

function MemoProvider({ children }: { children: ReactNode }) {
  const [text, setText] = useState<string>("");
  const [tempText, setTempText] = useState<string[]>([]);
  const [saveText, setSaveText] = useState<Array<string>[]>([]);

  const onEnterTemp = () => {
    // save 추가
    setTempText([]);
    setSaveText([...saveText, tempText]);
  };
  const addTemp = (e: React.FormEvent<any>) => {
    // temp 추가
    e.preventDefault();
    setTempText([...tempText, text]);
    setText("");
  };
  const onChangeInput = (e: React.ChangeEvent<any>) => {
    setText(e.target.value);
  };
  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      addTemp(e);
    }
  };
  return (
    <MemoContext.Provider
      value={{
        onChangeInput,
        text,
        addTemp,
        tempText,
        saveText,
        onEnterTemp,
        keyDownHandler,
      }}
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
