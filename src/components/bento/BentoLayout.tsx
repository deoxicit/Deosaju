import React from 'react';

interface BentoLayoutProps {
    children: React.ReactNode;
}

const BentoLayout: React.FC<BentoLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen w-full p-4 md:p-8 flex items-center justify-center relative z-10">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
                {children}
            </div>
        </div>
    );
};

export default BentoLayout;
