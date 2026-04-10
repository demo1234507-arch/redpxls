/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor';
import VerticalTimeline from './components/VerticalTimeline';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import RevealProvider from './components/RevealProvider';
import Home from './pages/Home';
import CaseStudyDetails from './pages/CaseStudyDetails';

export default function App() {
  return (
    <BrowserRouter>
      <div className="pixel-bg min-h-screen flex flex-col">
        <Cursor />
        <VerticalTimeline />
        <Navigation />
        
        <RevealProvider>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-study/:id" element={<CaseStudyDetails />} />
            </Routes>
          </div>
        </RevealProvider>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}
