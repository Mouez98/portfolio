import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/index'
import Home from './components/Home/Home';
import About from './components/about';
import './App.scss';
import Contact from './components/contact';
import Skills from './components/skills';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='skills' element={<Skills />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
