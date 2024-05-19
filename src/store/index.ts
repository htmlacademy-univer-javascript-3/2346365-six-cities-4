
export { store } from './store';

export {
  fetchOfferAction,
  updateSingleOffer,
  getOffer,
  getIsOfferLoading,
} from './slices/offer';

export {
  fetchReviewsAction,
  postReviewAction,
  setReviewsErrorStatus,
  getReviewsHasError,
  getHasError,
  getReviews,
  getIsReviewsLoading,
  getIsReviewsStatusSubmitting,
} from './slices/reviews';

export {
  fetchNearbyAction,
  updateMultipleNearby,
  getNearbyOffers,
  getIsNearbyOffersLoading,
} from './slices/nearby-offers';

export {
  changeFavoriteStatusAction,
  fetchFavoritesAction,
  updateMultipleFavorites,
  getFavorites,
  getIsFavoriteStatusSubmitting,
  getFavoritesCount,
  getIsFavoritesLoading,
} from './slices/favorites';

export {
  changeSortingType,
  changeCity,
  getSelectedSortType,
  getSelectedCity,
} from './slices/global';

export {
  fetchOffersAction,
  updateMultipleOffers,
  getOffers,
  getIsOffersLoading,
} from './slices/multiple-offers';

export {
  checkAuthAction,
  loginAction,
  logoutAction,
  getIsSubmittingLogin,
  getAuthCheckedStatus,
  getUserInfo,
  getAuthorizationStatus,
} from './slices/user';
