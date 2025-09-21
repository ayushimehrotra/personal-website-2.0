import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroSection } from './components/HeroSection'
import { BubblePhoto } from './components/BubblePhoto'
import { Navigation } from './components/Navigation'
import { ProjectsSection } from './components/ProjectsSection';
import './App.css'
import { ResearchSection } from './components/ResearchSection'
// Import your research subpages
import HSetsPage from './research_pages/HSets'

// Hero Bubbles Component - random positioning
const HeroBubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="floating-bubble"
      style={{
        '--delay': `${i * 0.5}s`,
        '--size': `${30 + Math.random() * 64}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        position: 'absolute'
      } as React.CSSProperties}
    />
  ));

  return <div className="absolute inset-0 overflow-visible pointer-events-none">{bubbles}</div>;
};

// Side Bubbles Component - only on sides
const SideBubbles = () => {
  const bubbles = Array.from({ length: 20 }, (_, i) => {
    const side = Math.random() < 0.5 ? 'left' : 'right';
    return (
      <div
        key={i}
        className={`floating-bubble ${side}`}
        style={{
          '--delay': `${i * 0.5}s`,
          '--size': `${30 + Math.random() * 64}px`,
          '--top': `${Math.random() * 100}%`,
        } as React.CSSProperties}
      />
    );
  });

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{bubbles}</div>;
};

// Create a main page component
const MainPage = () => {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center min-h-screen">
        {/* Hero bubbles only for this section */}
        <HeroBubbles />
        
        <div className="relative w-full lg:w-1/2 overflow-visible">
          <BubblePhoto />
        </div>

        <div className="relative flex justify-center w-full lg:w-1/2">
          <HeroSection />
        </div>
      </div>

      {/* Research, Projects, Footer with side bubbles */}
      <div className="relative z-0 px-8 lg:px-16 pb-16">
        <SideBubbles />
        <ResearchSection />
        <ProjectsSection />
      </div>
    </>
  );
};

// Create a layout component for shared elements
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <div className="fixed top-0 left-0 w-full z-20 bg-zinc-900/70 backdrop-blur-md border-b border-zinc-800 px-4 py-1 flex justify-end font-sans text-sm text-blue-50 tracking-tight space-x-4">
        <Navigation />
      </div>
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/research/hessian-sets" element={<HSetsPage />} />
          {/* Add more research pages here as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App