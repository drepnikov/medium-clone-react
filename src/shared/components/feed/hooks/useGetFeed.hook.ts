import {
  useErrorSelector,
  useFeedSelector,
  useIsLoadingSelector,
} from "src/shared/components/feed/store/selectors";
import { useAppDispatch } from "src/store/hooks/store.hook";
import { useEffect } from "react";
import { getFeedThunk } from "src/shared/components/feed/store/thunks/getFeed.thunk";

export const useGetFeed = (url: string) => {
  const dispatch = useAppDispatch();

  const feed = useFeedSelector();
  const isError = useErrorSelector();
  const isLoading = useIsLoadingSelector();

  useEffect(() => {
    dispatch(getFeedThunk({ url }));
  }, [dispatch, url]);

  return { feed, isError, isLoading };
};
