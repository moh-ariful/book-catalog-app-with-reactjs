import './App.css';
import Mynavbar from './components/myNavbar';
import "./style/landingPage.css";
import Intro from './components/Intro';
import Trending from './components/Trending';
import Bestseller from './components/Bestseller';



function App() {
  return (
    <div>
      {/* Bagian Intro */}
      <div className='front'>
      <Mynavbar />
      <Intro />
      </div>
      {/* Pentup Intro */}

      {/* Bagian Trending */}
      <div className='trending'>
        <Trending />
      </div>
      {/* Penutup Trending */}

      <div className='bestseller'>
        <Bestseller />
      </div>

    </div>
  );
}

export default App;
