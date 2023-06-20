import Navbar from './Components/Navbar';
import News from './Components/News';
import React, { useState } from 'react';
import ContactUs from "./Components/ContactUs";
  
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
// const image=()=>{
//    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
// //  // document.body.style.backgroundRepeat= "no-reapeat";}
// }
  const pageSize = 5;
  const country="in"
  const apiKey = "803557db01784a8588c8759324d9c9ee"
  const [progress, setProgress] = useState(0);
  const [mode,setMode]= useState('light');
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      // showAlert("Dark mode has been enabled","success");
      // document.title='TextUtils-Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      // showAlert("Light mode has been enabled","success");
      // document.title='TextUtils-Light Mode';
  
    } 
  }
      
    return (
     
       
        <Router>
        <Navbar  mode={mode} toggleMode={toggleMode}/>
        <LoadingBar height={3}
        color='#f11946'
        progress={   progress}
        //onLoaderFinished={() => setProgress(0)}
      />
        <Switch>
          <Route exact path="/"><News setProgress={    setProgress} apiKey={    apiKey} key="general" pageSize={    pageSize}  country={ country} category="general"/></Route>
          <Route exact path="/business"><News setProgress={    setProgress} apiKey={    apiKey} key="business" pageSize={    pageSize}  country={ country} category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={    setProgress} apiKey={    apiKey} key="entertainment" pageSize={    pageSize}  country={ country} category="entertainment"/></Route>
          
          <Route exact path="/health"><News setProgress={    setProgress} apiKey={    apiKey} key="health" pageSize={    pageSize}  country={ country} category="health"/></Route>
          <Route exact path="/science"><News setProgress={    setProgress} apiKey={    apiKey} key="science" pageSize={    pageSize}  country={ country} category="science"/></Route>
          <Route exact path="/sports"><News setProgress={    setProgress} apiKey={    apiKey} key="sports" pageSize={    pageSize}  country={ country} category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={    setProgress} apiKey={    apiKey} key="technology" pageSize={    pageSize}  country={ country} category="technology"/></Route>
          <Route path="/contactus" component={ContactUs}  style={{ margin: '100px 100px 100px',  height:'100%' ,}}/>
        </Switch>
        </Router>
      
    )
  }

  export default App;
