import { createContext, useContext } from "react";

const loginContext = createContext<null>(null);

function LoginProvider({ children }: { children: React.ReactNode }) {
  return <loginContext.Provider value={null}>{children}</loginContext.Provider>;
}

function useLoginContext() {
  const context = useContext(loginContext);
  return;
}

export { LoginProvider, useLoginContext };
