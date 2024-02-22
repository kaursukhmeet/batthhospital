import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Doctors from './components/Doctors.jsx';
import Services from './components/Services.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
      <Doctors/>
      <Footer/>
    </div>
  );
}

export default App;
