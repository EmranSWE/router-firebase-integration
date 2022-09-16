import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

import SignUp from './components/signUp/SignUp';
import Products from './components/Products/Products';
import Orders from './components/orders/Orders';
import RequireAuth from './components/requireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/product' element={<Products></Products>}></Route>
      <Route path='/orders' element={
        <RequireAuth>
          <Orders></Orders>
        </RequireAuth>
      }>

      </Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<SignUp></SignUp>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
