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
          <Work/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  )
}