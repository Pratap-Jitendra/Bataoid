
import './App.css';

import { BrowserRouter as Router, Route,  Routes }
 from "react-router-dom";
import Nav1 from './Routing/Nav1';
import Gaj from './Routing/Gaj';
import GajRight from './Routing/GajRight';



function App() {
  return (
    <div className="App">
      <Router>
  <Routes>
  <Route exact path="/" element={<Nav1/>} />
    <Route exact path="/gaj" element={<Gaj/>} />
    <Route exact path="/second" element={<GajRight/>} />
   
  
  </Routes>
</Router>

     {/*  <Nav/>
      <Hero title="No Dairy No Pen"/>
      <Home/>
      <Batao/> 
      <Footer/> */}
    </div>
  );
}

export default App;
