import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Navigation } from './components/Navigation.tsx'
import { PricingPage } from './pages/Pricing.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
  
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App
