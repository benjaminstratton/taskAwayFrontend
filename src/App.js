import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./bare.min.css";

import Tasks from './pages/Tasks'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Tasks />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/signup"
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
