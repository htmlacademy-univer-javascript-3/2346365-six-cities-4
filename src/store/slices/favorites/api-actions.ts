import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offer } from '../../../types/offer';
import { FavoriteData } from '../../../types/favorite-data';

import { APIRoute, NameSpace } from '../../../const';

import { AsyncThunkConfig } from '../../../types/state';
import { updateMultipleOffers } from '../multiple-offers/multiple-offers-data';
import { updateSingleOffer } from '../offer/single-offer-data';
import { updateMultipleFavorites } from './favorites-data';
import { updateMultipleNearby } from '../nearby-offers';

export const fetchFavoritesAction = createAsyncThunk<
  Offer[],
  undefined,
  AsyncThunkConfig
>(
  `${NameSpace.FavoritesData}/fetchFavorites`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<
  Offer,
  FavoriteData,
  AsyncThunkConfig
>(
  `${NameSpace.FavoritesData}/changeFavoriteStatus`,
  async ({ status, offerId }, { rejectWithValue, extra: api, dispatch }) => {
    try {
      const { data } = await api.post<Offer>(
        `${APIRoute.Favorite}/${offerId}/${status}`
      );

      dispatch(updateMultipleOffers(data));
      dispatch(updateSingleOffer(data));
      dispatch(updateMultipleFavorites(data));
      dispatch(updateMultipleNearby(data));

      return data;
    } catch (e) {
      return rejectWithValue(e as Error);
    }
  }
);
