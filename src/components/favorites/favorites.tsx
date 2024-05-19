
import { Offer } from '../../types/offer.ts';
import FavoritesList from '../favorites-list/favorites-list';

type FavoritesProps = {
  favorites: Offer[];
};

function Favorites({ favorites }: FavoritesProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritesList favoriteList={favorites} />
    </section>
  );
}

export default Favorites;
