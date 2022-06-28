import {
  useErrorSelector,
  useFeedSelector,
  useIsLoadingSelector,
} from "src/shared/components/feed/store/selectors";
import { useAppDispatch } from "src/store/hooks/store.hook";
import { useEffect, useRef } from "react";
import { getFeedThunk } from "src/shared/components/feed/store/thunks/getFeed.thunk";

export const useGetFeedEffect = (url: string) => {
  const dispatch = useAppDispatch();
  const init = useRef(true);

  const feed = useFeedSelector();
  const isError = useErrorSelector();
  const isLoading = useIsLoadingSelector();

  useEffect(() => {
    if (init.current) {
      init.current = false;
      dispatch(getFeedThunk({ url }));
    }
  });

  return { feed, isError, isLoading };
};
