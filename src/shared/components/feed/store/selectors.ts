import { useAppSelector } from "src/store/hooks/store.hook";

export const useIsLoadingSelector = () =>
  useAppSelector((state) => state.feed.isLoading);

export const useErrorSelector = () =>
  useAppSelector((state) => state.feed.error);

export const useFeedSelector = () => useAppSelector((state) => state.feed.data);
