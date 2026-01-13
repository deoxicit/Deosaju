import React from 'react';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    stack: string[];
    role?: string;
}

const projects: Project[] = [
    {
        title: "Enterprise Microservices Platform",
        description: "Built mission-critical WMS microservices serving 1000+ users with 99.9% uptime. Implemented event-driven architecture with Azure Service Bus.",
        stack: ["ASP.NET Core 8", "Azure SQL", "Microservices"],
        role: "Jan 2025 – Aug 2025"
    },
    {
        title: "SynCoLab",
        description: "Built Filecoin/IPFS-based AI agent platform with .NET Core backend APIs and Entity Framework. Developed UCAN auth system.",
        stack: ["Next.js", ".NET Core APIs", "Docker"],
        role: "Mar 2025 – Jun 2025"
    },
    {
        title: "Full-Stack Web3 Applications",
        description: "Developed NFT marketplace backend using ASP.NET Core Web APIs. Implemented complex LINQ queries for royalty calculations.",
        stack: ["ASP.NET Core", "Entity Framework", "Solidity"],
        role: "Aug 2024 – Oct 2024"
    },
    {
        title: "Internal Tools",
        description: "Built internal tools in Laravel and .NET Core. Completed 10+ projects on microservices architecture and observability.",
        stack: ["Laravel", ".NET Core", "Entity Framework"],
        role: "Intern"
    },
    {
        title: "React Add-ons",
        description: "Shipped React add-ons with .NET Core backend APIs increasing productivity by 15%. Automated reports using Google Apps Script.",
        stack: ["React", ".NET Core", "Google Apps Script"],
        role: "Sep 2022"
    }
];

interface AllProjectsProps {
    onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen w-full bg-cyber-black p-4 md:p-8 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <motion.button
                        onClick={onBack}
                        whileHover={{ x: -5 }}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                        ←
                    </motion.button>
                    <h1 className="text-3xl font-bold">All Projects</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold">{project.title}</h2>
                                {project.role && <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-400">{project.role}</span>}
                            </div>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map(tech => (
                                    <span key={tech} className="text-xs px-2 py-1 rounded bg-azure-blue/10 text-azure-blue border border-azure-blue/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
