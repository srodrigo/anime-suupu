import React from "react";

export type AppContextProperties = {
  version: string;
};

const AppContext = React.createContext<AppContextProperties>({ version: "" });

export default AppContext;
