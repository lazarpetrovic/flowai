import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Navigation } from './components/Navigation.tsx'
  
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App
