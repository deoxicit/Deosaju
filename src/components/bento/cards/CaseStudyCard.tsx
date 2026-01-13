import React from 'react';
import BentoCard from '../BentoCard';

interface CaseStudyProps {
    title: string;
    description: string;
    date: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, description, date }) => {
    return (
        <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px]">
                    📄
                </div>
                <span className="text-[10px] text-gray-500 font-mono">{date}</span>
            </div>

            <div>
                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-azure-blue transition-colors">
                    {title}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2">
                    {description}
                </p>
            </div>
        </BentoCard>
    );
};

export default CaseStudyCard;
