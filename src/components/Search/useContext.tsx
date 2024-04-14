import { createContext, useContext, useState } from "react";

type SearchType = {
  questions: string[];
  text: string;
  onChangeInput: <T>(e: React.ChangeEvent<T>) => void;
  onClickHandler: <T>(e: React.MouseEvent<T>) => void;
  keyDownHandler: (e: React.KeyboardEvent) => void;
};

const searchContext = createContext<null | SearchType>(null);

function SearchProvider({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);

  const addQuestions = (e: React.FormEvent<any>) => {
    e.preventDefault();
    setQuestions([...questions, text]);
    setText("");
  };
  const onChangeInput = (e: React.ChangeEvent<any>) => {
    setText(e.target.value);
  };
  const onClickHandler = (e: React.MouseEvent<any>) => {
    addQuestions(e);
  };
  const keyDownHandler = (e: React.KeyboardEvent) => {
    onChangeInput(e);
    if (e.key === "Enter" && e.nativeEvent.isComposing === false && !e.shiftKey)
      addQuestions(e);
  };
  return (
    <searchContext.Provider
      value={{
        questions,
        text,
        onChangeInput,
        onClickHandler,
        keyDownHandler,
      }}
    >
      {children}
    </searchContext.Provider>
  );
}

function useSearchContext() {
  const context = useContext(searchContext);
  return context;
}

export { SearchProvider, useSearchContext };
