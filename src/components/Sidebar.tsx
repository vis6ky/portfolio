import React, { useEffect, useState } from "react";

interface ProfileData {
  name: string;
  role: string;
}

interface NavigationItem {
  value: string;
  label: string;
}

interface SidebarProps {
  profile: ProfileData;
  navigation: NavigationItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ profile, navigation }) => {
  const [activeSection, setActiveSection] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "").trim();
    return hash || "home";
  });

  useEffect(() => {
    const scrollContainer = document.querySelector(".mainContent");
    if (!scrollContainer) return;

    const handleScroll = () => {
      let active = "home";
      for (const item of navigation) {
        const element = document.getElementById(item.value);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 240) active = item.value;
        }
      }
      setActiveSection(active);
      if (active === "home") {
        window.history.replaceState(null, "", " ");
      } else {
        window.history.replaceState(null, "", `#${active}`);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    value: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(value);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(value);
    }
  };

  return (
    <aside className="w-64 h-screen sticky top-0 bg-[#f2f3f7] border-r border-slate-200/60 flex flex-col select-none flex-shrink-0 overflow-hidden">
      {/* TOP 50% - IMAGE SECTION */}
      <div className="h-1/2 w-full relative overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(/me.jpeg)` }}
        />
        {/* Gradient Overlay for Text Readability */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"
          onContextMenu={(e) => e.preventDefault()} // Disables Right-Click entirely
          draggable="false"
        />

        {/* Name and Role Overlayed on Image */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-left">
          <h1 className="text-xl font-bold text-white tracking-tight">
            {profile.name}
          </h1>
          <span className="text-xs text-sky-400 font-semibold tracking-widest uppercase mt-1 block">
            {profile.role}
          </span>
        </div>
      </div>

      {/* BOTTOM 50% - NAVIGATION & FOOTER */}
      <div className="h-1/2 w-full flex flex-col justify-between p-6">
        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 mt-4">
          {navigation.map(({ label, value }) => {
            const isActive = activeSection === value;
            return (
              <a
                key={value}
                href={`#${value}`}
                onClick={(e) => handleNavClick(e, value)}
                className={`group flex items-center text-sm tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-sky-500 font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span
                  className={`h-px transition-all duration-300 mr-2 bg-sky-500 ${isActive ? "w-6" : "w-0 group-hover:w-4"}`}
                />
                {label}
              </a>
            );
          })}
        </nav>

        {/* Footer and Social Block */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <a
              href="https://in.linkedin.com/in/vishal-sharaf-3b78134a"
              className="text-slate-400 hover:text-sky-500 transition-colors"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/vis6ky"
              className="text-slate-400 hover:text-sky-500 transition-colors"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/vis6ky/"
              className="text-slate-400 hover:text-sky-500 transition-colors"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
