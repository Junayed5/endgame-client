import './App.css';
import Header from './component/Header';
import { Routes, Route} from "react-router-dom";
import Tasks from './component/Tasks';
import ToDo from './component/ToDo';
import Calender from './component/Calender';
import Home from './component/Home';
import { useState } from 'react';
import Footer from './component/Footer';

function App() {
  const [date, setDate] = useState(new Date())
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home date={date}/>}/>
        <Route path="/completeTask" element={<Tasks/>}/>
        <Route path='/toDo' element={<ToDo date={date}/>}/>
        <Route path='/calender' element={<Calender date={date} setDate={setDate}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
