import './Header.scss';
import logo from '/favicon.ico';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="TfM Logo" />
      <div className="header__content">
        <h1 className="header__title">Tinder for Movies</h1>
        <p className="header__subtitle">
          Task for Frontend Developer at Pragmatic Coders
        </p>
      </div>
    </header>
  );
}
