import { ReactNode, createContext, useContext, useState } from "react";

type ContextType = {
  onChangeInput: <T>(e: React.ChangeEvent<T>) => void;
  text: string;
  addTemp: <T>(e: React.FormEvent<T>) => void;
  tempText: string[];
  saveText: Array<string>[];
  confirmTemp: (text: string) => void;
  onClickEnterTemp: React.MouseEventHandler<HTMLButtonElement>;
};
const MemoContext = createContext<ContextType | null>(null);

function MemoProvider({ children }: { children: ReactNode }) {
  const [text, setText] = useState<string>("");
  const [tempText, setTempText] = useState<string[]>([]);
  const [saveText, setSaveText] = useState<Array<string>[]>([]);
  const confirmTemp = (text: string) => {
    setTempText([...tempText, text]);
  };
  const onClickEnterTemp = () => {
    setTempText([]);
    setSaveText([...saveText, tempText]);
  };
  const addTemp = (e: React.FormEvent<any>) => {
    e.preventDefault();
    // const textElement = e.currentTarget[0] as HTMLInputElement;
    confirmTemp(text);
    // textElement.value = "";
    setText("");
  };

  const onChangeInput = (e: React.ChangeEvent<any>) => {
    setText(e.target.value);
  };
  return (
    <MemoContext.Provider
      value={{
        onChangeInput,
        text,
        addTemp,
        tempText,
        confirmTemp,
        saveText,
        onClickEnterTemp,
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
