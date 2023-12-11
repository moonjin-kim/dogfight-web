import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './page/main';
import LoginPage from './page/login';
import RegisterPage from './page/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
