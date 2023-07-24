
import './App.css';
import Exercise1 from './Pages/Ex1';
import Exercise2 from './Pages/Ex2';
import Exercise3 from './Pages/Ex3';
import Exercise4 from './Pages/Ex4'; 

import ErrorPage from './Pages/ErrorPage';

import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Exercise1 />} /> 
         <Route path="/exercise2" element={<Exercise2 />} /> 
        <Route path="/exercise3" element={<Exercise3 />} /> 
        <Route path="/exercise4" element={<Exercise4 />} /> 
 
        <Route path="*" element={ <ErrorPage /> } />
     
      </Routes>
      
    </div>
  );
}

export default App;