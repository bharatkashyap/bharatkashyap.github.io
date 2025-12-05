import React, { useRef, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { create } from 'zustand';

// Create Zustand store
const useStore = create((set) => ({
  savedItems: [],
  toggleSave: (productId) => set((state) => {
    const exists = state.savedItems.some(item => item.productId === productId);
    if (exists) {
      return { savedItems: state.savedItems.filter(item => item.productId !== productId) };
    } else {
      return { savedItems: [...state.savedItems, { productId }] };
    }
  }),
}));

// Track renders


function HeartButton({ productId }) {
  // ✅ NARROW SELECTOR
  const isSaved = useStore((state) =>
    state.savedItems.some((item) => item.productId === productId)
  );
  const toggleSave = useStore((state) => state.toggleSave);
  
  const [isFlashing, setIsFlashing] = useState(false);

  const prevIsSaved = useRef(isSaved);

  useEffect(() => {
    if(prevIsSaved.current !== isSaved) {
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 300);
      prevIsSaved.current = isSaved;
      
    }    
  });
 
  
  return (
    <button
      className={`heart-button ${isSaved ? 'saved' : ''} ${isFlashing ? 'flashing' : ''}`}
      onClick={() => toggleSave(productId)}
    >
      <span style={{ filter: isSaved ? 'none' : 'grayscale(1)', opacity: isSaved ? 1 : 0.4 }}>
        ❤️
      </span>
      {isFlashing && <div className="flash" />}
    </button>
  );
}

function App() {
  const productIds = [1, 2, 3, 4, 5, 6, 7, 8];
  
  return (
    <div>
      <div className="container">
        {productIds.map(id => <HeartButton key={id} productId={id} />)}
      </div>
      <div className="info">💡 Yellow flash = component re-rendered</div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
