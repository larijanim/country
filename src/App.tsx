
import GitHubusers from './GitHubusers'
import Countries from './Countries'
import {Route , Routes, BrowserRouter as Router , Link} from 'react-router-dom';
import './App.css'
import Accordion from './Accordion';
import JobsPost from './JobsPost';



const Home = () => (
  <div>
    <h1>Welcome</h1>
  </div>
);
function App() {


  return (
    <>
      <div className='container'>
        <Router>
          <div className='navbar'>
          <Link to="/">Home</Link>|
          <Link to="/users">Users</Link>|
          <Link to="/countries">Countries</Link>|
          <Link to="/accordion">Accordion</Link>|
          <Link to="/JobsPost">JobsPost</Link>
          </div>

        <Routes>
           <Route exact path="/" element={<Home />} />
            <Route exact path='/users' element={   <GitHubusers/>}/>
            <Route  exact path='/countries' element={<Countries/>}/>
            <Route  exact path='/accordion' element={<Accordion/>}/>
            <Route  exact path='/JobsPost' element={<JobsPost/>}/>
         </Routes>
     
     
        </Router>
        </div>
    </>
  )
}

export default App
