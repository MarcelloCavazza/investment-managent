import './App.css'
import Home from './components/pages/Home.tsx'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
     <Router>
          {/* <nav className='nav'>
            <Link to='/' className='link-nav'>Home</Link>
          </nav> */}
          <Routes>
              <Route path='/' element={<Home/>}>
              </Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
