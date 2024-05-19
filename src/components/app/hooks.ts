
import { useEffect } from 'react';

import { fetchFavoritesAction, getAuthCheckedStatus } from '../../store';

import { useAppDispatch, useAppSelector } from '../../hooks';

const useFetchFavorites = () => {
  const dispatch = useAppDispatch();
  const authCheckedStatus = useAppSelector(getAuthCheckedStatus);

  useEffect(() => {
    if (authCheckedStatus) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, authCheckedStatus]);
};

export { useFetchFavorites };
