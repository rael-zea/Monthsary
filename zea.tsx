import React from "react";

const LoveForZea = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-5xl md:text-7xl font-cursive text-pink-500 neon-text">
          I Love You Zea ❤️
        </h1>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        
        .font-cursive {
          font-family: 'Dancing Script', cursive;
        }
        
        .neon-text {
          text-shadow: 
            0 0 5px #ff1493,
            0 0 10px #ff1493,
            0 0 20px #ff1493,
            0 0 40px #ff1493,
            0 0 80px #ff1493;
        }
        
        @keyframes fall1 {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes fall2 {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(-360deg); opacity: 0; }
        }
        
        @keyframes fall3 {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(270deg); opacity: 0; }
        }
        
        @keyframes fall4 {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          25% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(-270deg); opacity: 0; }
        }
        
        @keyframes fall5 {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(180deg); opacity: 0; }
        }
        
        @keyframes fall6 {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          35% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(-180deg); opacity: 0; }
        }
        
        @keyframes fall7 {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(90deg); opacity: 0; }
        }
        
        @keyframes fall8 {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          45% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(-90deg); opacity: 0; }
        }
        
        @keyframes fall9 {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(45deg); opacity: 0; }
        }
        
        .animate-fall1 {
          animation: fall1 8s linear infinite;
          animation-delay: 0s;
        }
        
        .animate-fall2 {
          animation: fall2 10s linear infinite;
          animation-delay: 1s;
        }
        
        .animate-fall3 {
          animation: fall3 12s linear infinite;
          animation-delay: 2s;
        }
        
        .animate-fall4 {
          animation: fall4 9s linear infinite;
          animation-delay: 3s;
        }
        
        .animate-fall5 {
          animation: fall5 11s linear infinite;
          animation-delay: 4s;
        }
        
        .animate-fall6 {
          animation: fall6 13s linear infinite;
          animation-delay: 5s;
        }
        
        .animate-fall7 {
          animation: fall7 8s linear infinite;
          animation-delay: 6s;
        }
        
        .animate-fall8 {
          animation: fall8 10s linear infinite;
          animation-delay: 7s;
        }
        
        .animate-fall9 {
          animation: fall9 12s linear infinite;
          animation-delay: 8s;
        }
      `}</style>
    </div>
  );
};

export default LoveForZea;