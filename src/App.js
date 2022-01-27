import './App.css';
// import SearchBar from './Components/SearchBar';
import {Routes, Route,} from 'react-router-dom'
import Home from './Components/Home';
import Description from './Components/Description'
// import MoviList from './Components/MovieList';

function App() {
  return (
    <div className="App container">
    {/* <SearchBar /> */}
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/Description/:id" element={<Description />}/>
      
    </Routes>
    
    
      
    </div>
  );
}

export default App;
