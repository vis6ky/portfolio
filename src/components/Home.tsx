import React, { useRef, useMemo } from 'react';
import DraggableCard from './animations/drag';

interface ISkill {
    label: string;
    value: number;
    image: string;
}

interface HomeProps {
    data?: {
        profile?: { name: string; role: string };
        skills?: ISkill[];
    };
}

const Home: React.FC<HomeProps> = ({ data }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const profileName = data?.profile?.name || "Vishal Sharaf";
    const profileRole = data?.profile?.role || "Full Stack Developer";
    const skillSet = data?.skills || [];

    // Distribute skills programmatically across the coordinate grid bounds
    const randomizedLogos = useMemo(() => {
        return skillSet.map((skill, index) => {
            const cols = 5;
            const row = Math.floor(index / cols);
            const col = index % cols;

            // 🌟 THE OVERFLOW FIX: Restricting the max-boundaries so icons stay safely within the sandbox grid limits
            const baseLeft = 6 + col * 18; 
            const baseTop = 8 + row * 20;  

            // Safe bounded random shifts to prevent running over edge walls
            const randomShiftX = Math.floor(Math.random() * 4) - 2;
            const randomShiftY = Math.floor(Math.random() * 4) - 2;
            const randomRotation = Math.floor(Math.random() * 20) - 10;

            // Clamping left and top coordinates strictly between 5% and 86% width ratios
            const finalLeft = Math.min(Math.max(baseLeft + randomShiftX, 5), 86);
            const finalTop = Math.min(Math.max(baseTop + randomShiftY, 5), 84);

            const localSrc = `/images/${skill.image}`;
            return {
                name: skill.label,
                src: localSrc,
                top: `${finalTop}%`,
                left: `${finalLeft}%`,
                rotate: `${randomRotation}deg`
            };
        });
    }, [skillSet]);

    return (
        /* 🌟 Prevent overflow explicitly at the parent container edge layout root */
        <div className="w-full mx-auto px-4 overflow-hidden">
            
            {/* 🌟 THE ONE-LINER FIX: Re-engineered layout grid forced via whitespace-nowrap and items-center */}
            <div className="mb-14 flex flex-col lg:flex-row lg:items-center justify-between border-b border-slate-100 pb-5 gap-4 w-full overflow-hidden select-none">
                <div className="flex flex-row items-center gap-3 flex-wrap md:flex-nowrap w-full lg:w-auto">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-none whitespace-nowrap">
                        {profileName}
                    </h1>
                    <span className="text-xl font-light text-slate-300 mx-1 hidden md:inline select-none leading-none">|</span>
                    <p className="text-sm md:text-base font-bold text-slate-700 tracking-tight leading-none pt-0.5 md:pt-1 whitespace-nowrap">
                        {profileRole} Portfolio
                    </p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-100/40 px-3 py-1.5 rounded-lg flex-shrink-0 shadow-sm select-none whitespace-nowrap">
                    Interactive Skills Sandbox
                </div>
            </div>
            
            {/* INVISIBLE SANDBOX LAYER: Safe absolute coordinates viewport canvas frame */}
            <section 
                className="relative w-full overflow-hidden select-none bg-transparent max-w-full" 
                style={{ minHeight: "68vh" }}
            >
                {/* 🌟 WATERMARK SIZE CORRECTION: Reduced text-size scaling parameters to lock bounds elegantly */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mountaineer-layer z-0 select-none opacity-[0.05] max-w-full overflow-hidden">
                    <h2 className="text-center text-[8vw] font-black tracking-tighter text-slate-900 uppercase whitespace-nowrap">
                        Technical Skills
                    </h2>
                </div>
                
                {/* Active Drag Zone Canvas Track */}
                <div className="draggableBlock absolute inset-0 mountaineer-layer z-10 w-full h-full max-w-full" ref={containerRef}>
                    {randomizedLogos.map((logo, index) => (
                        <DraggableCard
                            key={index}
                            containerRef={containerRef}
                            src={logo.src}
                            alt={`${logo.name} Logo`}
                            rotate={logo.rotate}
                            top={logo.top}
                            left={logo.left}
                            className="w-16 h-16 md:w-[72px] md:h-[72px] flex items-center justify-center p-2 bg-transparent filter drop-shadow-md hover:drop-shadow-xl hover:scale-110 active:scale-95 transition-all duration-150 cursor-grab active:cursor-grabbing"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
