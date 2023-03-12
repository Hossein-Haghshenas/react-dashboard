import { createContext, useContext, useState } from "react";

const MenuContext = createContext();
const MenuUpdateContext = createContext();

// custom hooks for menu visibility
const useMenu = () => useContext(MenuContext);
const useMenuUpdate = () => useContext(MenuUpdateContext);

// context provider
const MenuProvider = ({ children }) => {
  const [menuToggler, setMenuToggler] = useState(false);

  return (
    <MenuContext.Provider value={menuToggler}>
      <MenuUpdateContext.Provider value={() => setMenuToggler(!menuToggler)}>{children}</MenuUpdateContext.Provider>
    </MenuContext.Provider>
  );
};

export { MenuProvider, useMenu, useMenuUpdate };
