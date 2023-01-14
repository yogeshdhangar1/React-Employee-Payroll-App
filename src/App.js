import React from 'react'

import { Route,Routes } from 'react-router-dom';
import HomePage from './components/FormComponents/HomePage'
import FormContentPage from './components/FormComponents/FormContentPage';
class App extends React.Component {

  render(){
  return (
    <div>
        <Routes>
            <Route path='/home' element={<FormContentPage/>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/Employeeform/:id" element={<FormContentPage />}></Route>
        </Routes>
      </div>
      );
}
}

export default App;