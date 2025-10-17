import React from 'react'

const Loader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-md z-50'>
      <div className="relative flex flex-col items-center justify-center space-y-6">
        
        {/* Main Orbital System */}
        <div className="relative flex items-center justify-center">
          {/* Central Core */}
          <div className="w-5 h-5 bg-primary rounded-full animate-pulse shadow-lg"></div>
          
          {/* Orbiting Ring 1 */}
          <div className="absolute border-2 border-primary/30 rounded-full animate-spin-slow"
            style={{ width: '80px', height: '80px' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-primary rounded-full shadow-md"></div>
            </div>
          </div>
          
          {/* Orbiting Ring 2 */}
          <div className="absolute border border-muted-foreground/20 rounded-full animate-spin-slow-reverse"
            style={{ width: '120px', height: '120px' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-progress-bar"></div>
        </div>

        {/* Status Text */}
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-foreground">Initializing Cygnus</p>
          <p className="text-xs text-muted-foreground">Securing your connection</p>
        </div>

      </div>
    </div>
  )
}

export default Loader