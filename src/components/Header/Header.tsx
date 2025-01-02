import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src="/favicon.ico" alt="TfM Logo" />
      <div className="header__content">
        <h1 className="header__title">Tinder for Movies</h1>
        <p className="header__subtitle">
          Task for Frontend Developer at Pragmatic Coders
        </p>
      </div>
    </header>
  );
}
