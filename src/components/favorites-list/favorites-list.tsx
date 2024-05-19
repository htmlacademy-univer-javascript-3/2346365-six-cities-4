
import FavoritesListItem from '../favorites-list-item/favorites-list-item';
import { Offer } from '../../types/offer';
import { CityName } from '../../const';

const getFavoritesByCity = (favoriteList: Offer[]) =>
  favoriteList.reduce(
    (favoritesByCity: Record<string, Offer[]>, item: Offer) => {
      const cityName = item.city.name;
      favoritesByCity[cityName] = [
        ...(favoritesByCity[cityName] || []),
        item,
      ];
      return favoritesByCity;
    },
    {}
  );

type FavoriteListProps = {
  favoriteList: Offer[];
};

function FavoritesList({ favoriteList }: FavoriteListProps): JSX.Element {
  const favoritesByCity = getFavoritesByCity(favoriteList);

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesByCity).map(
        ([cityName, offers]: [string, Offer[]]) => (
          <FavoritesListItem
            key={cityName}
            cityName={cityName as CityName}
            offers={offers}
          />
        )
      )}
    </ul>
  );
}

export default FavoritesList;
