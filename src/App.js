import './App.css';
import Header from './component/Header';
import { Routes, Route} from "react-router-dom";
import Tasks from './component/Tasks';
import ToDo from './component/ToDo';
import Calender from './component/Calender';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/completeTask" element={<Tasks/>}/>
        <Route path='/toDo' element={<ToDo/>}/>
        <Route path='/calender' element={<Calender/>}/>
      </Routes>
    </div>
  );
}

export default App;
