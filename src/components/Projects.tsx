import React, { useState } from "react";

interface ProjectItem {
    title: string;
    image: string;
    description?: string;
    value?: string;
    tag: string[];
}

interface ProjectsProps {
    data?: {
        projects?: ProjectItem[];
    };
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
    const projects = data?.projects || [];

    const uniqueTags = Array.from(
        new Set(projects.flatMap((project) => project.tag || []))
    );

    // Default the starting highlighted navigation tab category filter
    const [activeTab, setActiveTab] = useState<string>(uniqueTags[0] || "");
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    if (projects.length === 0) {
        return (
            <div className="w-full text-center text-slate-400 py-12 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                No project records mapped inside the configuration data sheet.
            </div>
        );
    }

    const filteredProjects = projects.filter((p) => p.tag.includes(activeTab));

    const handleOpenDetails = (project: ProjectItem) => {
        setSelectedProject(project);
        setIsDrawerOpen(true);
    };

    return (
        <div className="container w-full mx-auto px-4 relative">
            {/* Header Content Title */}
            <div className="title mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500">Showcase</span>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mt-1">My Work</h1>
                <p className="text-sm text-slate-500 font-medium mt-1">A showcase of production systems and experimental codebases.</p>
            </div>

            {/* Navigation Menu Tabs */}
            <div className="w-full mb-8">
                <div className="flex space-x-2 bg-slate-100 border border-slate-200 p-1.5 rounded-xl max-w-max shadow-sm select-none">
                    {uniqueTags.map((tag) => {
                        const isActive = activeTab === tag;
                        return (
                            <button
                                key={tag}
                                onClick={() => setActiveTab(tag)}
                                className={`px-4 py-2 text-sm font-semibold rounded-lg capitalize transition-all duration-200 ${
                                    isActive
                                        ? "bg-white text-sky-600 shadow-sm font-bold"
                                        : "text-slate-500 hover:text-slate-900"
                                }`}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Grid Workspace Track */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => {
                    const displayDescription = project.value || project.description || "";
                    
                    return (
                        <div 
                            key={index} 
                            onClick={() => handleOpenDetails(project)}
                            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/40 shadow-sm transition-all duration-300 hover:bg-white hover:border-sky-500/30 hover:shadow-md cursor-pointer"
                        >
                            <div className="relative overflow-hidden aspect-video w-full border-b border-slate-200/60 bg-slate-100">
                                <img 
                                    src={project.image.startsWith('http') ? project.image : `/portfolio/images/${project.image}`} 
                                    alt={project.title} 
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                                    loading="lazy"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://unsplash.com";
                                    }}
                                />
                                {/* Modern overlay click indicator */}
                                <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm border border-slate-200/50 scale-95 group-hover:scale-100 transition-transform duration-300">
                                        View Case Study
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors duration-200">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 font-medium line-clamp-2">
                                        {displayDescription}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                                    {project.tag.map((t) => (
                                        <span key={t} className="text-xs font-semibold text-sky-600 bg-sky-50 border border-sky-100/60 px-2.5 py-0.5 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 🌟 THE FIXED POSITION DRAWER: Swapped 'absolute' to 'fixed' to lock view boundaries to the screen screen walls */}
            <div 
                className={`fixed top-0 right-0 h-screen w-full sm:w-[460px] bg-white border-l border-slate-200 shadow-2xl z-50 flex flex-col transition-all duration-300 ease-out transform ${
                    isDrawerOpen && selectedProject ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {selectedProject && (
                    <div className="h-full flex flex-col justify-between overflow-hidden">
                        {/* Drawer Header Area */}
                        <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/50">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-md">
                                    Case Study Specs
                                </span>
                                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mt-3">
                                    {selectedProject.title}
                                </h3>
                            </div>
                            {/* Close Button Anchor */}
                            <button 
                                onClick={() => setIsDrawerOpen(false)}
                                className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all flex items-center justify-center flex-shrink-0"
                                aria-label="Close case study drawer"
                            >
                                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable Project Metrics Body info description content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
                            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 aspect-video flex-shrink-0">
                                <img 
                                    src={selectedProject.image.startsWith('http') ? selectedProject.image : `/portfolio/images/${selectedProject.image}`} 
                                    alt={selectedProject.title} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => { (e.target as HTMLImageElement).src = "https://unsplash.com"; }}
                                />
                            </div>

                            <div className="space-y-2">
                                <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Architecture & Overview</h5>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                    {selectedProject.value || selectedProject.description}
                                </p>
                                {/* Technology Pill Chips Footer Section */}
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tag.map((t) => (
                                        <span key={t} className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;    
