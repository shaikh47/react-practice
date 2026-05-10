// create a provider here which will be used to wrap the app and provide any global state or context for now jsut create the template for the provider and export it
import React, { Suspense, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { MainErrorFallback } from "@/components/errors/main";
import { ThemeProvider } from "@/features/theme";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
