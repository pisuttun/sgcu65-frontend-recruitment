import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ReactNotifications } from 'react-notifications-component';
import Background from './components/background';
import Header from './components/header';
import NameListPage from './pages/nameList';
import RegisterPage from './pages/register';
import { defaultTheme } from './theme';
import 'react-notifications-component/dist/theme.css';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ReactNotifications />
      <BrowserRouter>
        <Header />
        <Background />
        <Routes>
          <Route path="/" element={<NameListPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
