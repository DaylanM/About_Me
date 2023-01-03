import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import AboutMe from './components/aboutme/AboutMe';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ContactForm from './components/contacts/ContactForm';
import Contacts from './components/contacts/Contacts';
import FetchUser from './components/auth/FetchUser';
import ContactList from './components/contacts/ContactList';
import Skills from './components/skills/Skills';
import React, { Component } from 'react';


const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/ContactMe' element={<ContactForm />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/contacts' element={<Contacts />} />
          </Route>
          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </FetchUser>
  </>
)

export default App;