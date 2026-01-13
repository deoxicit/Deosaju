
import BentoCard from '../BentoCard';
import { motion } from 'framer-motion';

interface ProjectProps {
    onClick?: () => void;
}

const ProjectCard: React.FC<ProjectProps> = ({ onClick }) => {
    return (
        <BentoCard onClick={onClick} className="md:col-span-2 md:row-span-2 min-h-[300px] group relative cursor-pointer">
            {/* Background Removed */}

            <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="px-2 py-1 rounded-md bg-azure-blue/20 text-azure-blue text-[10px] font-mono border border-azure-blue/20 mb-2 inline-block">
                            AI Platform
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-1">
                            SynCoLab
                        </h3>
                        <p className="text-gray-400 text-xs line-clamp-2 max-w-xs">
                            AI agent platform on Filecoin/IPFS with .NET backend and UCAN auth system.
                        </p>
                    </div>
                    <motion.div
                        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
                        whileHover={{ x: 5, y: -5 }}
                    >
                        ↗
                    </motion.div>
                </div>
            </div>
        </BentoCard>
    );
};

export default ProjectCard;
