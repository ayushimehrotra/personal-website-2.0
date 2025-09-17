import { HeroSection } from './components/HeroSection'
import { BubblePhoto } from './components/BubblePhoto'
import { FloatingBubbles } from './animation/FloatingBubbles'
import './App.css'

function App() {
  return (
    <>
      <div className='relative min-h-screen w-full overflow-visible'>
        <FloatingBubbles/>
        <div className='relative flex w-full'>
          <div className="w-1/2 flex items-center justify-center">
            <BubblePhoto />
          </div>
          
          {/* Right side - Hero content */}
          <div className="flex-1 min-w-0 flex justify-center">
            <HeroSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default App