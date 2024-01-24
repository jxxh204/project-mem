import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ContextType = {
  onChangeInput: <T>(e: React.ChangeEvent<T>) => void;
  text: string;
  onClickHandler: <T>(e: React.MouseEvent<T>) => void;
  memorizeTemp: string[];
  memorizeSave: string[][];
  memorizeOnEnterTemp: () => void;
  // React.MouseEventHandler<HTMLButtonElement>
  keyDownHandler: (e: React.KeyboardEvent) => void;
};
const MemoContext = createContext<ContextType | null>(null);

function MemoProvider({ children }: { children: ReactNode }) {
  const [text, setText] = useState<string>("");
  const [tempText, setTempText] = useState<string[]>([]);
  const [saveText, setSaveText] = useState<Array<string>[]>([]);

  const memorizeOnEnterTemp = useCallback(() => {
    // save 추가
    setTempText([]);
    setSaveText([...saveText, tempText]);
  }, [saveText, tempText]);
  const memorizeTemp = useMemo(() => {
    return tempText;
  }, [tempText]);

  const memorizeSave = useMemo(() => {
    return saveText;
  }, [saveText]);

  const addTemp = (e: React.FormEvent<any>) => {
    if (text === "") {
      alert("텍스트를 입력해주세요.");
      return;
    }
    // temp 추가
    e.preventDefault();
    setTempText([...tempText, text]);
    setText("");
  };
  const onClickHandler = (e: React.MouseEvent<any>) => {
    addTemp(e);
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
        text,
        memorizeTemp,
        memorizeSave,
        onChangeInput,
        onClickHandler,
        memorizeOnEnterTemp,
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
