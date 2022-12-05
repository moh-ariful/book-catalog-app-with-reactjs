import './App.css';
import Navigation from './components/Navigation';
import "./style/landingPage.css";
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/Superhero';


function App() {
  return (
    <div>
      {/* Bagian Intro */}
      <div className='myBG'>
      <Navigation />
      <Intro />
      </div>
      {/* Pentup Intro */}

      {/* Bagian Trending */}
      <div className='trending'>
        <Trending />
      </div>
      {/* Penutup Trending */}

      <div className='superhero'>
        <SuperHero />
      </div>
      
    </div>
  );
}

export default App;
