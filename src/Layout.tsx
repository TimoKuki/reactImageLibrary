// src/Layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Top bar */}
      <div style={{ height: 64, backgroundColor: '#333', color: 'white', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
        <h1 style={{ fontSize: 20, margin: 0 }}>Top Bar</h1>
      </div>

      {/* Main content area */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left sidebar */}
        <div style={{ width: 200, backgroundColor: '#eee', padding: '16px' }}>
          Left Sidebar
        </div>

        {/* Center content */}
        <div style={{ flex: 1, padding: '16px' }}>
          {children}
        </div>

        {/* Right sidebar */}
        <div style={{ width: 200, backgroundColor: '#eee', padding: '16px' }}>
          Right Sidebar
        </div>
      </div>
    </div>
  );
};

export default Layout;
