import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* You can add decorative elements here later */}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;