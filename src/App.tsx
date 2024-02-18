import Cards from './pages/Cards/Cards'
import Navigation from './components/Navigation/Navigation';

import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
      <div className='main__container'>
        <Cards />
      </div>
      <Navigation />
    </>

  )
}

export default App
