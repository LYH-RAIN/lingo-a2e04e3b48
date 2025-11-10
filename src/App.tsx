import React from 'react';

function App() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center text-white p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hello, <span className="text-yellow-300">World!</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
          Welcome to this beautiful React application
        </p>
        <div className="animate-float inline-block">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-2xl">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16 text-yellow-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
              />
            </svg>
          </div>
        </div>
        <div className="mt-12 animate-fade-in">
          <button 
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => alert('Hello World!')}
          >
            Click Me
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-sm opacity-75">
        Built with React, TypeScript and Tailwind CSS
      </div>
    </div>
  );
}

export default App;