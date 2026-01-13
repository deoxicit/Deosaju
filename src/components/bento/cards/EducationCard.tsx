import React from 'react';
import BentoCard from '../BentoCard';

const EducationCard: React.FC = () => {
    return (
        <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col justify-between group">
            <div className="flex items-start justify-between mb-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                    🎓
                </div>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-400">
                    2019 - 2023
                </span>
            </div>

            <div>
                <h3 className="text-sm font-bold text-white mb-1">
                    B.Tech in Computer Science
                </h3>
                <p className="text-xs text-gray-400 mb-2">
                    Jyothi Engineering College
                </p>
                <div className="flex flex-wrap gap-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-azure-blue/10 text-azure-blue border border-azure-blue/20">
                        GPA: 7.98
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                        Minor: Mechatronics
                    </span>
                </div>
            </div>
        </BentoCard>
    );
};

export default EducationCard;
