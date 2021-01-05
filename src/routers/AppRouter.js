import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { About } from '../components/About/About';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer'
import { Home } from '../components/Home/Home'
import { WannaKnow } from '../components/About/WannaKnow';
import { Services } from '../components/Services/Services';
import { Work } from '../components/Work/Work';
import { Technologies } from '../components/Services/Technologies';
import { DetailWork } from '../components/Work/DetailWork';
export const AppRouter = () =>{
  return(
    <Router forceRefresh={true}>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
          <WannaKnow/>
          <Services/>
          <Technologies/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/work" component={Work}/>
        <Route path="/detail/:name" component={DetailWork}/>
      </Switch>
      <Footer/>
    </Router>
  )
}