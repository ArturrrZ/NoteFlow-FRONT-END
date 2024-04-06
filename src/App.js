
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
    
      <Header/>

      <Routes>
      <Route path="/" element={<NotesListPage />}/>
      <Route path='/note/:id' element={<NotePage />} />
      </Routes>

      <Footer/>
      
    </Router>  
    </div>
  );
}

export default App;
