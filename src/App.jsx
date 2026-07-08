import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Msaster GitHub  Fast</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
