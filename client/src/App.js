import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import AboutMe from './components/aboutme/AboutMe';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/AboutMe' element={<AboutMe />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;