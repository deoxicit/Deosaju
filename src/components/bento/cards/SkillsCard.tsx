import React from 'react';
import BentoCard from '../BentoCard';

const skills = [
    "ASP.NET Core", "C#", "Azure", "Microservices",
    "Entity Framework", "SQL Server", "React", "Docker",
    "Next.js", "Redis", "CI/CD", "TypeScript"
];

const SkillsCard: React.FC = () => {
    return (
        <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-center">
            <h3 className="text-gray-400 text-xs font-mono mb-4 uppercase tracking-widest">Stack</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200 hover:bg-white/10 transition-colors cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </BentoCard>
    );
};

export default SkillsCard;
