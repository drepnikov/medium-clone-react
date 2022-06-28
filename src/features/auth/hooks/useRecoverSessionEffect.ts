import { useEffect, useRef } from "react";
import { getCurrentUserThunk } from "src/features/auth/store/thunks/getCurrentUser.thunk";
import { useAppDispatch } from "src/store/hooks/store.hook";
import { useIsLoggedInSelector } from "src/features/auth/store/selectors";

export const useRecoverSessionEffect = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useIsLoggedInSelector();
  const init = useRef(true);

  useEffect(() => {
    if (isLoggedIn === null && init.current) {
      init.current = false;
      dispatch(getCurrentUserThunk());
    }
  });

  return { isLoggedIn };
};
