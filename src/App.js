import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogBody from './components/BlogBody';
import Home from './pages/Home';


const App = () => {
  
  return(
    <Router>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/blogs'>Blogs</Link>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs/:id' element={<BlogBody />} />
      </Routes>
    </Router> 
  );
}
export default App;