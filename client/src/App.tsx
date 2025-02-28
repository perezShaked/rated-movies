import { CardsContainer, ManagementBanner } from './components';
import logo from '../public/appIcon.png';
import './App.css';

export const App = () => {
  return (
    <>
      <div className="appTitle">
        <img className="appLogo" src={logo} />
        Rated Movies
      </div>
      <div className="appContainer">
        <ManagementBanner />
        <CardsContainer />
      </div>
    </>
  );
};
