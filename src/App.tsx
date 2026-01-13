import { useState } from 'react';
import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import BentoLayout from './components/bento/BentoLayout';
import ProfileCard from './components/bento/cards/ProfileCard';
import ProjectCard from './components/bento/cards/ProjectCard';
import SkillsCard from './components/bento/cards/SkillsCard';
import ContactCard from './components/bento/cards/ContactCard';
import TargetCard from './components/bento/cards/TargetCard';
import EducationCard from './components/bento/cards/EducationCard';
import AllProjects from './components/AllProjects';

function App() {
    const [view, setView] = useState<'home' | 'projects'>('home');

    if (view === 'projects') {
        return <AllProjects onBack={() => setView('home')} />;
    }

    return (
        <>
            <BackgroundVideo />
            <BentoLayout>
                <ProfileCard />
                <ProjectCard onClick={() => setView('projects')} />

                <TargetCard />
                <SkillsCard />
                <EducationCard />
                <ContactCard />
            </BentoLayout>
        </>
    );
}

export default App;
