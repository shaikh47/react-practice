// create a provider here which will be used to wrap the app and provide any global state or context for now jsut create the template for the provider and export it
import React, { createContext, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AppContext = createContext({});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // You can add any global state or context here
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{}}>{children}</AppContext.Provider>
    </QueryClientProvider>
  );
};
