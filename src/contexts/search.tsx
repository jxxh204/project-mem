import { createContext, useContext, useState } from "react";

type SearchType = {
  questions: string[];
  text: string;
  onChangeInput: <T>(e: React.ChangeEvent<T>) => void;
  addQuestions: <T>(e: React.FormEvent<T>) => void;
};

const searchContext = createContext<null | SearchType>(null);

function SearchProvider({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const onChangeInput = (e: React.ChangeEvent<any>) => {
    setText(e.target.value);
  };
  const addQuestions = (e: React.FormEvent<any>) => {
    e.preventDefault();
    setQuestions([...questions, text]);
    setText("");
  };
  return (
    <searchContext.Provider
      value={{ questions, text, onChangeInput, addQuestions }}
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
