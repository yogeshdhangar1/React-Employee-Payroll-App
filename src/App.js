import React from 'react';
import Form from './components/Form';
import { Route,Routes,Link } from 'react-router-dom';
import HomePage from './components/FormComponents/HomePage'
class App extends React.Component {

  render(){
  return (
    <div>
        <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/form' element={<Form/>}/>
        </Routes>
        <h2>
          <Link to="/home" >Home </Link>  |
          <Link to="/form">Form </Link>
        </h2>
      </div>
      );
}
}

export default App;