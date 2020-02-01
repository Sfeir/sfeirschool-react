import React from "react";

export const PeopleContext = React.createContext<People>([]);

// change this component to implement the loading logic
// and provide the loaded people array to all its
// descendants
export const PeopleProvider: React.FC = ({ children }) => <>{children}</>;
