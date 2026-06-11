import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const getTabQueryKey = (dashboardKey) => ["dashboard-active-tab", dashboardKey];

export const resetPersistedDashboardTabs = (queryClient) => {
  ["student", "counsellor", "admin"].forEach((dashboardKey) => {
    queryClient.removeQueries({ queryKey: getTabQueryKey(dashboardKey), exact: true });
  });
};

export const usePersistedDashboardTab = ({
  dashboardKey,
  defaultTab = "overview",
  validTabs = [],
}) => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const allowedTabs = useMemo(() => {
    if (validTabs.length > 0) {
      return new Set(validTabs);
    }

    return new Set([defaultTab]);
  }, [defaultTab, validTabs]);

  const isValidTab = useCallback(
    (tab) => Boolean(tab) && allowedTabs.has(tab),
    [allowedTabs],
  );

  const queryKey = useMemo(() => getTabQueryKey(dashboardKey), [dashboardKey]);

  const urlTab = searchParams.get("tab");

  const resolveTab = useCallback(
    (tab) => {
      if (isValidTab(tab)) {
        return tab;
      }

      const cachedTab = queryClient.getQueryData(queryKey);
      if (isValidTab(cachedTab)) {
        return cachedTab;
      }

      return defaultTab;
    },
    [defaultTab, isValidTab, queryClient, queryKey],
  );

  const [activeTab, setActiveTabState] = useState(() => resolveTab(urlTab));

  useEffect(() => {
    const nextTab = resolveTab(urlTab);

    setActiveTabState((currentTab) => (currentTab === nextTab ? currentTab : nextTab));
    queryClient.setQueryData(queryKey, nextTab);
  }, [queryClient, queryKey, resolveTab, urlTab]);

  const setActiveTab = useCallback(
    (nextTab) => {
      if (!isValidTab(nextTab)) {
        return;
      }

      setActiveTabState(nextTab);
      queryClient.setQueryData(queryKey, nextTab);

      const nextParams = new URLSearchParams(searchParams);
      nextParams.set("tab", nextTab);
      setSearchParams(nextParams);
    },
    [isValidTab, queryClient, queryKey, searchParams, setSearchParams],
  );

  return [activeTab, setActiveTab];
};
