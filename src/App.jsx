import {React, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './client/pages/Home';
import Series from './client/pages/Series'
import Fixture from './client/components/Fixtures';

// import Scores from './pages/Scores';
import TopAdBanner from './client/components/TopAdBanner'
import NavBar  from './client/components/NavBar'
// import Footer from './components/Footer';
import { useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './state';


const App = () => {
  
  const isDarkMode =  useSelector((state) => state.isdarkmode)
  const dispatch = useDispatch();
  const {isdarkmode,  islightmode } = bindActionCreators(actionCreators, dispatch);

  const getUserPreferredTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isdarkmode();
    }else{
      islightmode();
    };
    
  };
  
 

  useEffect(() => {
  
    getUserPreferredTheme();

  }, []);
  


  return (

    <Router>
       <TopAdBanner />
      <header className={` text-white bg-white/90 sticky top-0 z-50 overflow-hidden`}>
     
          <NavBar />
      </header>
      
      
      <section className={`${isDarkMode ?    'bg-white/90 text-black' :'bg-black/90 text-white'}    min-h-screen overflow-auto  `}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/series" element={<Series/>} />
          <Route exact path="/fixtures" element={<Fixture/>} />
          {/* <Route exact path="/scores" element={<Scores/>} /> */}
        </Routes>
        
      {/* <Footer /> */}
      </section>
    </Router>

  );
};

export default App;
