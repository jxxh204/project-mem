import { ReactNode, createContext, useContext, useState } from "react";

type ContextType = {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  addTemp: (e: React.FormEvent<HTMLFormElement>) => void;
  tempText: string[];
  saveText: Array<string>[];
  confirmTemp: (text: string) => void;
  onClickEnterTemp: React.MouseEventHandler<HTMLImageElement>;
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
  const addTemp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const textElement = e.currentTarget[0] as HTMLInputElement;
    confirmTemp(text);
    // textElement.value = "";
    setText("");
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

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
