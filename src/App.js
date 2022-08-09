import logo from './logo.svg';
import './App.css';
import {createBrowserHistory} from 'history'
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route,Switch } from "react-router-dom";
import Detail from './Components/Detail';
import Home from './Components/Home';
import Footer from './Components/Footer';
import GroupID from './Components/GroupID';
import Header from './Components/Header';



// export const history = createBrowserHistory();
function App() {
  return (
    <>

      <Header />
      
      <Switch>
         <Route path="/detail/:id"  component={Detail} />
         <Route  path='/footer'  component={Footer} />
         <Route  path='/groupid'  component={GroupID} />
         <Route  path='/'  component={Home} />
      </Switch>
     
      <Footer />
    </>
  );
}

export default App;
