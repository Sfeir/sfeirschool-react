import React, { createContext, useContext } from "react";
import { HashRouter as Router } from "react-router-dom";

const ConfigContext = createContext();

export const Config = ({ useRouter = false, children }) => (
  <ConfigContext.Provider value={{ useRouter }}>
    {useRouter ? <Router>{children}</Router> : children}
  </ConfigContext.Provider>
);

export const useConfig = () => useContext(ConfigContext) || {};
