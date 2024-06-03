import Home from './pages/Home';
import NavBar from './pages/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        <Home />
        <h1>A new change!</h1>
      </div>
    </div>
  );
}

export default App;
