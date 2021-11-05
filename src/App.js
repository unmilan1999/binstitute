import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import 'react-slideshow-image/dist/styles.css'
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Former from './components/Form';
import NotFound from './components/notFound';
import { Container } from 'react-bootstrap'
import {Route,Switch,Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
       <main>
         <Container>
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/contact' component={Contact} />
            <Route path='/form' component={Former} />
            <Route path='/not-found' component={NotFound} />
            <Route path="/" exact component={Home}/>
            <Redirect to="/" />
          </Switch>
         </Container>
       </main>
      <Footer />
    </div>
  );
}

export default App;
