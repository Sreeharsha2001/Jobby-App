import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import JobItemDetails from './Components/JobItemDetails';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/'  element={<Home/>}/>
          <Route path='/jobs'  element={<Jobs/>}/>
          <Route path='/jobs/:id'  element={<JobItemDetails/>}/>
          <Route path='*'  element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
