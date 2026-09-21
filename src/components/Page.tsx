import React, { Suspense } from "react";

// 1. Explicitly define your lazy imports matching your exact filenames
const Home = React.lazy(() => import("./Home"));
const Projects = React.lazy(() => import("./Projects"));
const Experience = React.lazy(() => import("./Experience"));
const Education = React.lazy(() => import("./Education"));
const Contact = React.lazy(() => import("./Contact"));
const Services = React.lazy(() => import("./Services"));
const About = React.lazy(() => import("./About"));

// 2. Map the structural navigation handles to match your data.json exactly
const componentMap: Record<string, React.LazyExoticComponent<React.FC<any>>> = {
  home: Home,
  projects: Projects,        
  experience: Experience,
  education: Education,
  contact: Contact,
  services: Services,
  about: About,
};

interface PageProps {
  component: string;
  fullData?: any; // Receives the shared JSON portfolio data package bundle directly from App.tsx
}

const Page: React.FC<PageProps> = ({ component, fullData }) => { 
  // Look up the exact matching component from the map based on the lowercase JSON value
  const normalizedKey = component.toLowerCase().trim();
  const SelectedComponent = componentMap[normalizedKey];

  // Fail-safe protection if an unexpected value is added to data.json
  if (!SelectedComponent) {
    return (
      <div className="text-red-400 p-4 border border-dashed border-red-500/30 rounded max-w-max mx-auto my-4 bg-red-50">
        Component handler matching "{component}" was not registered in componentMap.
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="text-sky-500 font-medium animate-pulse p-6 text-center">
          Loading layout layer...
        </div>
      }
    >
      {/* 
         🌟 FIX: Pass fullData directly down as 'data'. 
         Since App.tsx already unpacked your sub-object streams, this gives your 
         sub-components direct access to data.skills, data.projects, data.experience, etc.
      */}
      <SelectedComponent data={fullData} />
    </Suspense>
  );
};

export default Page;
