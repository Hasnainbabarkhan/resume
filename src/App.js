import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout.jsx';
import Notfound from './components/Notfound.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
         <Route path='*' element={<Notfound/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
