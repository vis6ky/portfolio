import React, { useState } from "react";
import TiltCard from "./animations/tiltcard";

interface ServiceItem {
    title: string;
    describe: string;
    icon: string;
    color: string;
}

interface ServicesProps {
    data?: {
        services?: ServiceItem[];
    };
}

const Services: React.FC<ServicesProps> = ({ data }) => {
    // Read directly from your top-level JSON file parameter stream
    const servicesData = data?.services || [];
    
    // Default the starting centered index item card layout matrix view
    const [active, setActive] = useState<number>(3);

    // Matrix calculation functions for stacking cards animation depth
    const getTransform = (index: number) => {
        if (index === active) return 'scale(1) translate(0px, 0px)';
        
        // Calculate offsets based on positions relative to the active element card node
        const offset = index - active;
        const translateX = offset * 140; // Balanced spacing separation index width
        const scale = 1 - Math.abs(offset) * 0.15;
        const rotateY = offset > 0 ? -12 : 12;

        return `translateX(${translateX}px) scale(${scale}) perspective(500px) rotateY(${rotateY}deg)`;
    };

    const getZIndex = (index: number) => {
        return 10 - Math.abs(index - active);
    };

    const getFilter = (index: number) => {
        return index === active ? 'none' : 'blur(2px)';
    };

    const getOpacity = (index: number) => {
        if (index === active) return 1;
        return Math.abs(index - active) > 2 ? 0 : 0.6;
    };

    if (servicesData.length === 0) {
        return (
            <div className="w-full text-center text-slate-400 py-12 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                No services records mapped inside the configuration data sheet.
            </div>
        );
    }

    return (
        <div className="container w-full mx-auto px-4">
            {/* Header Block Section — Upgraded to high-contrast slate-900 typography */}
            <div className="title mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500">Expertise</span>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mt-1">What I do?</h1>
                <p className="text-sm text-slate-500 font-medium mt-1.5">Here are some of my domains of technical expertise.</p>
            </div>

            {/* 3D Dimensional Slider Track Container Layout Frame */}
            <div className="relative flex justify-center items-center min-h-[450px] w-full overflow-visible servicesBlock mt-8 bg-transparent">
                {servicesData.map((e, index) => {
                    const cardPositionIndex = index + 1; // Align layout tracking loop variables
                    const isActive = cardPositionIndex === active;

                    return (
                        <div 
                            key={index} 
                            onClick={() => setActive(cardPositionIndex)} 
                            style={{
                                transform: getTransform(cardPositionIndex),
                                zIndex: getZIndex(cardPositionIndex),
                                filter: getFilter(cardPositionIndex),
                                opacity: getOpacity(cardPositionIndex),
                            }}
                            className={`absolute transition-all duration-500 ease-out cursor-pointer select-none origin-center ${
                                isActive ? "cursor-default" : "hover:opacity-80"
                            }`}
                        >
                            {/* Wraps your custom interactive hover tilt container mechanics layout */}
                            <TiltCard data={e} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
