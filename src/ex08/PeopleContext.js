import React from "react";

export const PeopleContext = React.createContext([]);

// change this component to implement the loading logic
// and provide the loaded people array to all its
// descendants
export const PeopleProvider = PeopleContext.Provider;
