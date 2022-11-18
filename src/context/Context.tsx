import { createContext, useState } from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

type ContextProps = {
  ingredientsSelected: any;
  setIngredientsSelected: (NewState: any) => void;
};

const initialValue = {
  ingredientsSelected: [],
  setIngredientsSelected: () => {},
};

export const AppContext = createContext<ContextProps>(initialValue);

export function AppContextProvider({ children }: ChildrenProps) {
  //select ingredients:
  const [ingredientsSelected, setIngredientsSelected] = useState(initialValue.ingredientsSelected);

  return (
    <AppContext.Provider value={{ ingredientsSelected, setIngredientsSelected }}>
      {children}
    </AppContext.Provider>
  );
}
