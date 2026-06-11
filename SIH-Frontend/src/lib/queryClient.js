import { QueryClient } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const DASHBOARD_TAB_QUERY_KEY = "dashboard-active-tab";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 24 * 60 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

if (typeof window !== "undefined") {
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
    key: "sensee-react-query-cache",
  });

  persistQueryClient({
    queryClient,
    persister,
    maxAge: 24 * 60 * 60 * 1000,
    buster: "v1",
    dehydrateOptions: {
      shouldDehydrateQuery: (query) =>
        Array.isArray(query.queryKey) && query.queryKey[0] === DASHBOARD_TAB_QUERY_KEY,
    },
  });
}
