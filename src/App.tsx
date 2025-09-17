import { HeroSection } from './components/HeroSection'
import { BubblePhoto } from './components/BubblePhoto'
import { FloatingBubbles } from './animation/FloatingBubbles'
import './App.css'

function App() {
  return (
    <>
      <div className='relative min-h-screen w-full overflow-hidden'>
        <FloatingBubbles/>
        <div className='relative flex min-h-screen'>
          {/* Left side - Hero content */}
          <div className="w-1/2 flex items-center justify-center px-8">
            <HeroSection />
          </div>
          
          {/* Right side - Bubble photo */}
          <div className="w-1/2 flex items-center justify-center">
            <BubblePhoto />
          </div>
        </div>
      </div>
    </>
  )
}

export default App