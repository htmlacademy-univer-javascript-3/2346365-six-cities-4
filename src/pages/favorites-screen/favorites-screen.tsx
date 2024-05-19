
import cn from 'classnames';
import { getFavorites, getIsFavoritesLoading } from '../../store';
import { useAppSelector } from '../../hooks';
import Loader from '../../components/loader/loader';
import EmptyFavorites from '../../components/empty-favorites/empty-favorites';
import Favorites from '../../components/favorites/favorites';

function FavoritesScreen(): JSX.Element {
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const favorites = useAppSelector(getFavorites);
  const isEmptyFavorites = favorites.length === 0;

  if (isFavoritesLoading) {
    return <Loader />;
  }

  return (
    <main
      className={cn('page__main page__main--favorites', {
        'page__main--favorites-empty': isEmptyFavorites,
      })}
    >
      <div className="page__favorites-container container">
        {isEmptyFavorites ? (
          <EmptyFavorites />
        ) : (
          <Favorites favorites={favorites} />
        )}
      </div>
    </main>
  );
}

export default FavoritesScreen;
