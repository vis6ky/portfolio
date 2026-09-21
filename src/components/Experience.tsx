import React, { useState, useEffect } from 'react';

interface IExperience {
    company: string;
    post: string;
    img: string;
    period: string;
    location: string;
    role: string[];
}

interface ExperienceProps {
    data?: {
        experience?: IExperience[];
    };
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
    // Safely extract the experience array from your standardized data pipeline structure
    const history = data?.experience || [];
    
    // Core interaction states for map tracking and drawer transitions
    const [selectedJob, setSelectedJob] = useState<IExperience | null>(null);
    const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

    // Select the FIRST single object item from the array safely
    useEffect(() => {
        if (history.length > 0 && !selectedJob) {
            setSelectedJob(history[0]);
            setIsPanelOpen(true);
        }
    }, [history, selectedJob]);

    const handleSelectJob = (job: IExperience) => {
        setSelectedJob(job);
        setIsPanelOpen(true);
    };

    if (history.length === 0) {
        return (
            <div className="w-full text-center text-slate-400 py-12 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                No professional history mapped inside the configuration data sheet.
            </div>
        );
    }

    return (
        <div className="w-full mx-auto px-4 relative">
            {/* Header Content Section Title */}
            <div className="title mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500">Timeline Tracker</span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Professional History</h2>
                <p className="text-sm text-slate-500 font-medium mt-1">Click on any corporate record hub to view active location frames and milestones.</p>
            </div>

            {/* Main Integrated Viewport Workspace Container Frame Grid */}
            <div className="relative w-full rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm flex flex-col md:flex-row h-auto md:h-[580px]">
                
                {/* 1. LEFT COLUMN BAR: Interactive Corporate Hub Office Items List Selector */}
                <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-slate-200 bg-white h-64 md:h-full flex flex-col z-10 flex-shrink-0">
                    <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Office Hub Locations</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-thin">
                        {history.map((job, index) => {
                            const isCurrentActive = selectedJob?.company === job.company;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleSelectJob(job)}
                                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex gap-3 items-start ${
                                        isCurrentActive 
                                            ? "border-sky-500 bg-sky-50/40 shadow-sm" 
                                            : "border-slate-100 bg-white hover:border-slate-300"
                                    }`}
                                >
                                    {/* Icon Anchor Pin / Local Image Emblem */}
                                    <div className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors overflow-hidden ${
                                        isCurrentActive ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-500"
                                    }`}>
                                        {job.img ? (
                                            <img 
                                                src={job.img.startsWith('http') ? job.img : `/${job.img}`} 
                                                alt={job.company}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <i className="fa-solid fa-location-dot text-xs"></i>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-slate-800 text-sm tracking-tight truncate">{job.company}</h4>
                                        <p className="text-xs text-slate-500 font-medium mt-0.5 truncate">{job.location}</p>
                                        <span className="inline-block text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md mt-2">
                                            {job.period}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 2. CENTER CANVAS LAYER: Embed Map Layer Frame Visualizer */}
                <div className="flex-1 h-96 md:h-full relative bg-slate-100">
                    {selectedJob ? (
                        <iframe
                            title={`Map pointer indicating office of ${selectedJob.company}`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${selectedJob.company}, ${selectedJob.location}`)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                            className="w-full h-full filter brightness-[0.98] contrast-[1.02]"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400 bg-slate-50">
                            <i className="fa-solid fa-map-location-dot text-4xl mb-3 text-slate-300"></i>
                            <p className="text-sm font-medium">Select an anchor location point to paint the map view.</p>
                        </div>
                    )}
                </div>

                {/* 3. RIGHT VERTICAL DRAWER: Full Height Slide-Out Information Sidebar Detail Drawer */}
                <div 
                    className={`absolute top-0 right-0 h-full w-full md:w-[420px] bg-white border-l border-slate-200 shadow-2xl z-20 flex flex-col transition-all duration-300 ease-out transform ${
                        isPanelOpen && selectedJob ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {selectedJob && (
                        <div className="h-full flex flex-col justify-between">
                            
                            {/* Drawer Header Area */}
                            <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/50">
                                <div className="flex-1 pr-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-md">
                                        Role Specifications
                                    </span>
                                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mt-3">
                                        {selectedJob.company}
                                    </h3>
                                    <p className="text-sm font-semibold text-slate-600 mt-1">
                                        {selectedJob.post}
                                    </p>
                                </div>
                                {/* Close Drawer Trigger Anchor */}
                                <button 
                                    onClick={() => setIsPanelOpen(false)}
                                    className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all flex items-center justify-center flex-shrink-0"
                                    aria-label="Close detailed summary drawer"
                                >
                                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Scrollable Work Details Description Accomplishments Listing */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
                                <div className="flex flex-col gap-2 text-xs text-slate-400 font-medium border-b border-slate-100 pb-4">
                                    Tenure: {selectedJob.period}
                                    <br />
                                    Stationed: {selectedJob.location}
                                    <br />
                                    Core Accountabilities:
                                    <ul className="list-disc list-inside">
                                        {selectedJob.role.map((bullet, idx) => (
                                            <li key={idx}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;