
import './App.css';
import {Route , Routes} from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm'
import React, { useState } from 'react'
// import Alert from './components/Alert';
// import { createBrowserRouter } from 'react-router-dom';




function App() {
  //useState start
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  //useState end
  //function start
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#23232b'
      showalert("Dark mode enabled", "success")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert("Light mode enabled", "success")
    }
  }
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  //function end
  return (
    
    <>

      <Routes>
     
        <Navbar title="Thunder" about="About" mode={mode} togglemode={togglemode}/*here if we dont give title and about the default about will appear*/ />

        {/* <Alert alert={alert} /> */}

        <div className="container">
             <Route exact path='/'element={<TextForm heading="Enter your text" mode={mode} />}></Route>
              
              <Route exact path='/about'element={<About />}></Route>

              

        </div >
        </Routes>
    </>

  );

}

export default App;
