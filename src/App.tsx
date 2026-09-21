import React, { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";
import { profile } from "console";

// 1. Define distinct data branch structures
interface ProfileData {
  name: string;
  role: string;
}

interface NavigationItem {
  value: string;
  label: string;
}

// 2. Define the exact nested object layout matching your data log snippet
interface PortfolioDataSchema {
  profile: ProfileData;
  navigation: NavigationItem[];
  data: {
    skills: Array<{ label: string; value: number; image: string }>;
    projects?: any[];
    experience?: any[];
    education?: any[];
    services?: any[];
    certificates?: any[];
  };
  contactInfo?: {
    email: string;
    location: string;
    phone: string;
  };
}

const App = () => {
  const { width, height } = useWindowSize();
  const [portfolioData, setPortfolioData] = useState<PortfolioDataSchema | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching portfolio layout data stream:", err));
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-white text-slate-400 flex items-center justify-center font-medium">
        Loading Portfolio Engine...
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="h-screen w-screen bg-white text-red-500 flex items-center justify-center font-medium">
        Error: Portfolio structure data layout is unreadable or missing.
      </div>
    );
  }

  return (
    <div className="App flex h-screen w-screen overflow-hidden bg-white antialiased text-slate-800">
      <ReactConfetti width={width} height={height} recycle={false} />

      {/* FIXED LEFT SIDEBAR */}
      <div className="w-64 h-full flex-shrink-0 border-r border-slate-200 bg-[#f2f3f7]">
        <Sidebar
          profile={portfolioData.profile}
          navigation={portfolioData.navigation}
        />
      </div>

      {/* INDEPENDENT RIGHT SCROLL CONTAINER */}
      <main className="flex-1 h-full overflow-y-auto scroll-smooth bg-white px-8 md:px-16 lg:px-24">
        {portfolioData.navigation.map((item, index) => (
          <section
            key={index}
            id={item.value}
            className="min-h-screen w-full flex flex-col justify-center border-b border-slate-100 py-16 last:border-none"
          >
            {/* 🌟 CRUCIAL FIX: Forward both the data object and contact info objects safely */}
            <Page 
              component={item.value} 
              fullData={{ ...portfolioData.data, contactInfo: portfolioData.contactInfo, profile: portfolioData.profile }} 
            />
          </section>
        ))}
      </main>
    </div>
  );
};

export default App;
