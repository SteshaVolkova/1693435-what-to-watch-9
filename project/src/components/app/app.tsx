import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  filmCardSrc: string,
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number
}

function App({filmCardSrc ,filmCardTitle, filmCardGenre, filmCardYear}: AppScreenProps): JSX.Element {
  return (
    <MainPage filmCardSrc={filmCardSrc} filmCardTitle={filmCardTitle} filmCardGenre={filmCardGenre} filmCardYear={filmCardYear} />
  );
}

export default App;
