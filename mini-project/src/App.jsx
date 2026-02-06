
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ItemDetails from './pages/ItemDetails';
import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar /> {/* Stays at the top */}
      
      <div className="main-container">
        <Sidebar /> {/* Stays on the left */}
        
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/itemDetails/:itemId" element={<ItemDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      <Footer /> {/* Stays at the bottom */}
    </div>
  );
}
export default App;