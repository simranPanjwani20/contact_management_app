import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ContactForm from './components/ContactForm';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllContacts from './Pages/AllContact';
import AddNewContact from './Pages/NewContact';

function App() {
  return (
    <Router>
       <Header />
       <div style={{ display: 'flex', height: '100vh' }}>
  <div style={{ flex: '20%',backgroundColor: '#ffffff' }}>
  <Sidebar/>
  </div>
  <div style={{ flex: '80%',  backgroundColor: '#f0f0f0' }}>
    <Routes>
        <Route path="/" Component={AllContacts} />
        <Route path="/createcontact" Component={AddNewContact} />
        </Routes>
  </div>
</div>
    </Router>

  );
}

export default App;
