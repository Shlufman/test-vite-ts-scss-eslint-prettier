import { Header } from './app/components/Header/Header';
import { Main } from './app/pages/Main/Main';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
