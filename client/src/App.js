import { Route, Routes } from 'react-router-dom';
import './App.css';
import User from './components/Table/User';
import Add from './components/AddUser/Add';
import Edit from './components/EditUser/Edit';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
