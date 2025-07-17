import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Feature from './components/Feature';
import Footer from './components/Footer';
import AuthModal from './components/auth/AuthModal';
import MainPage from './components/Mainpage';

export function App() {

  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

   return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header onSignInClick={() => setShowModal(true)} />
              <Section />
              <Feature />
              <Footer />
              <AuthModal
                showModal={showModal}
                setShowModal={setShowModal}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </>
          }
        />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
