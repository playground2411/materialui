import { createRoot } from 'react-dom/client';
import { useState, useEffect, memo, useCallback } from 'react';

export default function App() {
  return(
    <div className="my-4">
      <h2 className="border-bottom border-dark py-2">This is App component.</h2>
    </div>
  );
}