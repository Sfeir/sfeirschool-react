import React, { createContext, useContext } from "react";
import { HashRouter as Router } from "react-router-dom";

type ConfigProps = {
  useRouter: boolean;
};

const ConfigContext = createContext<ConfigProps>({
  useRouter: false
});

export const Config: React.FC<ConfigProps> = ({
  useRouter = false,
  children
}) => (
  <ConfigContext.Provider value={{ useRouter }}>
    {useRouter ? <Router>{children}</Router> : children}
  </ConfigContext.Provider>
);

export const useConfig = () => useContext(ConfigContext);
