import React, { ReactNode } from 'react';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* You can add your header or navbar here */}
        <main>{children}</main>
        {/* You can add your footer here */}
      </body>
    </html>
  );
};

export default Layout;
