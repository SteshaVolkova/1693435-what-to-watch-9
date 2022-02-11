import MainPage from '../main-page/main-page';

type AppScreenProps = {
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number
}

function App({filmCardTitle, filmCardGenre, filmCardYear}: AppScreenProps): JSX.Element {
  return (
    <MainPage filmCardTitle={filmCardTitle} filmCardGenre={filmCardGenre} filmCardYear={filmCardYear} />
  );
}

export default App;
