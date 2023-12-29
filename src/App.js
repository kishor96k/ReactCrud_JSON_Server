import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './THREE/Components/Home';
function App() {
  return (
    <div className="App">
      <div className='container mt-3'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className=''>
            <Router>
              <Home />
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
