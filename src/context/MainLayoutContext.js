import { useState, createContext } from "react";

export const MainLayoutContext = createContext({});

const MainLayoutProviderComp = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <MainLayoutContext.Provider
      value={{
        toggleSidebar: toggleSidebar,
        showSidebar: showSidebar,
      }}
    >
      {children}
    </MainLayoutContext.Provider>
  );
};

export const MainLayoutProvider = MainLayoutProviderComp;
