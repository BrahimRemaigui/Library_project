import './App.css';
import './NavBar'
import NavBar from './NavBar';
import Home from './Home';
import Contact from './Contact';
import BlogsDatails from './BlogsDatails';
import Library from './Library'
import { useState } from 'react'
import{BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Foter from './Foter';
import Cont from './Cont';

function App() {
  let [name, setName] = useState('brahim');

  const hanle = () => {
    console.log('clicked')
    setName('aymen');
  }
  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&#038;display=swap" rel="stylesheet" />

    <Router>
    <div className="App">
      <NavBar />
      <div className="App">
          {/*<h1>WEL
          COME TO YOU FROM THE FIRST REACT PAGE  </h1>
          
          <button onClick={hanle}>Click me</button>
          <h4>Created by {name}</h4>   */}
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route  path="/creat">
        <Contact/>
        </Route>   
        <Route  path="/librery">
        <Library/>
        </Route>  
        <Route  path="/contact">
        <Cont/>
        </Route>  
  
        <Route  path="/login">
        <Cont/>
        </Route>  
          
        <Route  path="/blogs/:id">
        <BlogsDatails/>
        </Route>       
      </Switch>
      </div>
      <Foter></Foter>
    </div>
    </Router>
    </>
  );
}

export default App;
