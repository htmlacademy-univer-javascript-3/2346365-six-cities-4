
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offer';

type AppComponentProps = {
  placesCount: number;
  offers: Offer[];
}

function App({ placesCount, offers }: AppComponentProps): JSX.Element {
  const favourites = offers.filter((o) => o.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorScreen />} />
        <Route path="/" element={<MainScreen placesCount={placesCount} offers={offers}/>} />
        <Route
          path="/favourites"
          element={
            <PrivateRoute>
              <FavoritesScreen favourites={favourites}/>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/offer/:id" element={<OfferScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
