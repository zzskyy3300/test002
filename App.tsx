
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="text-center p-12 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          hello, the world!
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Welcome to your first React application.
        </p>
      </div>
    </div>
  );
};

export default App;
