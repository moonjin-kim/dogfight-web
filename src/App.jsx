import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './page/main';
import LoginPage from './page/login';
import RegisterPage from './page/register';
import CreatePage from './page/create';
import FightPage from './page/fight';
import styled from 'styled-components';
import { colors } from './assets/styles/colors';

function App() {
  return (
    <BrowserRouter>
      <Styled.Main>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/create' element={<CreatePage />}/>
          <Route path='/fight' element={<FightPage />}/>
        </Routes>
        <Styled.Footer />
      </Styled.Main>
    </BrowserRouter>
  );
}

const Styled = {
  Main : styled.div`
    height: auto;
    min-height: 100vh;
  `,
  Footer : styled.div`
    width: 100vw;
    margin-top: 20px;
    height: 20px;
  `
}
export default App;
