import React from 'react';
import BentoCard from '../BentoCard';

const QuoteCard: React.FC = () => {
    return (
        <BentoCard className="md:col-span-2 md:row-span-1 flex items-center justify-center p-8 bg-gradient-to-r from-azure-blue/5 to-neon-purple/5">
            <div className="text-center relative">
                <span className="absolute -top-4 -left-2 text-4xl text-white/10 font-serif">"</span>
                <p className="text-lg md:text-xl font-medium text-gray-200 italic font-serif leading-relaxed">
                    Code is a conversation with the future – let's make sure it's worth listening to.
                </p>
                <span className="absolute -bottom-6 -right-2 text-4xl text-white/10 font-serif">"</span>
                <div className="mt-3 flex justify-center items-center gap-2">
                    <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Philosophy</span>
                    <div className="h-[1px] w-8 bg-gray-700" />
                    <span className="text-xs text-xs text-gray-500">Deo Saju</span>
                </div>
            </div>
        </BentoCard>
    );
};

export default QuoteCard;
