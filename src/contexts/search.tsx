import { createContext, useContext, useState } from "react";

type SearchType = {
  questions: string[];
  text: string;
  setQuestions: React.Dispatch<React.SetStateAction<string[]>>;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addQuestions: (e: React.FormEvent<HTMLFormElement>) => void;
};

const searchContext = createContext<null | SearchType>(null);

function SearchProvider({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const addQuestions = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuestions([...questions, text]);
    setText("");
  };
  return (
    <searchContext.Provider
      value={{ questions, text, setQuestions, onChangeInput, addQuestions }}
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
