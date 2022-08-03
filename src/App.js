import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Film from './pages/film';
import NotFound from './pages/notfound';
import './styles/style.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/film/:id' element={<Film />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
