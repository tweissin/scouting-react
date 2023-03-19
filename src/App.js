import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom"
import PreMatch from "./pages/PreMatch"
import Auton from "./pages/Auton"
import Teleop from "./pages/Teleop"

function App() {
 return (
   <div className="App">
      <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">PreMatch</Link>
              </li>
              <li>
                <Link to="/auton">Autonomous</Link>
              </li>
              <li>
                <Link to="/teleop">Teleop</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< PreMatch />}></Route>
                 <Route exact path='/auton' element={< Auton />}></Route>
                 <Route exact path='/teleop' element={< Teleop />}></Route>
          </Routes>
          </div>
       </Router>
   </div>
 )
}

export default App
