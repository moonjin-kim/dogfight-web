import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './page/main';
import LoginPage from './page/login';
import RegisterPage from './page/register';
import CreatePage from './page/create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/create' element={<CreatePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
