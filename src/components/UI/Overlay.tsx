import { portfolioData } from '../../data/portfolio'

interface OverlayProps {
    activePart: 'hood' | 'dashboard' | 'license' | null;
    onClose: () => void;
    isDriving: boolean;
    onToggleDrive: () => void;
}

export const Overlay = ({ activePart, onClose, isDriving, onToggleDrive }: OverlayProps) => {
    // CONTENT MODALS (Existing logic...)
    if (activePart) {
        return (
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-end p-8 bg-black/50 transition-all z-20">
                <div className="pointer-events-auto bg-black/90 border border-blue-500/30 p-8 w-full max-w-lg h-full max-h-[80vh] overflow-y-auto backdrop-blur-sm relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/50 hover:text-white font-mono text-sm border border-white/20 px-2 py-1"
                    >
                        [X] CLOSE
                    </button>

                    {activePart === 'hood' && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-blue-500 font-mono border-b border-blue-500/30 pb-2">PROJECTS</h2>
                            {portfolioData.projects.map((project) => (
                                <div key={project.id} className="border-l-2 border-white/10 pl-4">
                                    <h3 className="text-xl text-white font-bold">{project.title}</h3>
                                    <p className="text-xs text-blue-400 font-mono mb-2">{project.period} | {project.technologies.join(', ')}</p>
                                    <p className="text-gray-300 text-sm">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activePart === 'dashboard' && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-purple-500 font-mono border-b border-purple-500/30 pb-2">SYSTEM SPECS</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {['Backend', 'Frontend', 'Cloud', 'DevOps'].map((category) => (
                                    <div key={category}>
                                        <h3 className="text-sm font-mono text-gray-500 mb-2">{category.toUpperCase()}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {portfolioData.skills.filter(s => s.category === category).map(s => (
                                                <span key={s.name} className="px-2 py-1 bg-white/5 text-white text-xs border border-white/10 rounded">
                                                    {s.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activePart === 'license' && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white font-mono border-b border-white/30 pb-2">DRIVER INFO</h2>
                            <div className="space-y-4 font-mono text-sm">
                                <div>
                                    <p className="text-gray-500">NAME</p>
                                    <p className="text-white text-lg">{portfolioData.personal.name}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">EMAIL</p>
                                    <a href={`mailto:${portfolioData.personal.email}`} className="text-blue-400 hover:underline">{portfolioData.personal.email}</a>
                                </div>
                                <div>
                                    <p className="text-gray-500">LINKEDIN</p>
                                    <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" className="text-blue-400 hover:underline">{portfolioData.personal.linkedin}</a>
                                </div>
                                <div>
                                    <p className="text-gray-500">GITHUB</p>
                                    <a href={`https://${portfolioData.personal.github}`} target="_blank" className="text-blue-400 hover:underline">{portfolioData.personal.github}</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    // MAIN HUD
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none p-8 flex flex-col justify-between z-10">
            <div>
                <h1 className="text-4xl font-bold font-mono text-white tracking-tighter drop-shadow-lg">DEO SAJU</h1>
                <p className="text-blue-500 font-mono tracking-widest text-sm">.NET | CLOUD | ARCHITECT</p>
            </div>

            <div className="flex justify-between items-end">
                {/* CONTROLS GUIDE */}
                <div className="bg-black/80 p-4 border border-white/10 backdrop-blur-sm rounded-lg pointer-events-auto">
                    <button
                        onClick={onToggleDrive}
                        className={`w-full mb-3 py-2 font-mono font-bold text-sm border transition-all ${isDriving ? 'bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500 hover:text-white' : 'bg-green-500/20 border-green-500 text-green-500 hover:bg-green-500 hover:text-white'}`}
                    >
                        {isDriving ? 'STOP ENGINE [ESC]' : 'START ENGINE [ENTER]'}
                    </button>

                    <div className="space-y-1 text-xs font-mono text-gray-400">
                        <div className="flex justify-between"><span>MODE:</span> <span className={isDriving ? "text-red-400" : "text-green-400"}>{isDriving ? 'DRIVE' : 'INSPECT'}</span></div>
                        {isDriving ? (
                            <>
                                <div className="flex gap-1 mt-2 justify-center">
                                    <div className="w-6 h-6 border border-white/30 flex items-center justify-center rounded">W</div>
                                </div>
                                <div className="flex gap-1 justify-center">
                                    <div className="w-6 h-6 border border-white/30 flex items-center justify-center rounded">A</div>
                                    <div className="w-6 h-6 border border-white/30 flex items-center justify-center rounded">S</div>
                                    <div className="w-6 h-6 border border-white/30 flex items-center justify-center rounded">D</div>
                                </div>
                                <div className="text-center mt-1 text-[10px] text-gray-500">SPACE to BRAKE</div>
                            </>
                        ) : (
                            <p className="mt-2 text-center text-gray-500">Click car parts<br />to interact</p>
                        )}
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-white/40 text-xs font-mono">INTERACTIVE VEHICLE PORTFOLIO v2.1</p>
                    <p className="text-white/60 text-sm font-mono mt-1">{isDriving ? 'DRIVE CAREFULLY' : 'CLICK VEHICLE PARTS TO INSPECT'}</p>
                </div>
            </div>
        </div>
    )
}
