import React from 'react';
import Prism from '../components/Prism/Prism';
import { Header } from '../components/Header/Header';

const Page = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
      {/* Top Header Row */}
      <Header />

      {/* Background Prism */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      {/* Content Layer (optional/clean placeholder overlay) */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#fff', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '-0.05em', margin: 0, display: 'none' }}>R I N</h1>
      </div>
    </div>
  );
};


export default Page;