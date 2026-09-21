import React, { useState, useEffect } from 'react';
import SwipeCard from './animations/swipe';

type Card = {
    id: number;
    url: string;
    label: string;
};

interface AboutProps {
    data?: {
        profile?: {
            name: string;
            role: string;
            about: string;
        };
        domain?: Card[];
    };
}

const About: React.FC<AboutProps> = ({ data }) => {
    const profileName = data?.profile?.name || "Vishal Sharaf";
    const aboutText = data?.profile?.about || "As a seasoned Full Stack Developer, I bring over eight years of extensive experience in the IT industry.";

    const paragraphs = typeof aboutText === 'string' 
        ? aboutText.split('\n').filter(p => p.trim() !== '') 
        : [aboutText];

    // Helper to format image paths once without breaking during loop shifts
    const formatCardUrls = (rawCards: Card[]): Card[] => {
        return rawCards.map(card => ({
            ...card,
            url: card.url.startsWith('http') || card.url.startsWith('/') 
                ? card.url 
                : `/portfolio/images/${card.url}`
        }));
    };

    const cardData: Card[] = data?.domain ? formatCardUrls(data.domain) : [];
    const [cards, setCards] = useState<Card[]>(cardData);

    useEffect(() => {
        if (data?.domain && data.domain.length > 0) {
            setCards(formatCardUrls(data.domain));
        }
    }, [data?.domain]);

    // 🌟 THE ALIGNMENT FIX: Cyclic array shift signature synced perfectly with the animation controls
    const updateCardStack = () => {
        setCards((prevCards) => {
            if (prevCards.length === 0) return prevCards;
            const [firstCard, ...restCards] = prevCards;
            return [...restCards, firstCard];
        });
    };

    return (
        <div className="container w-full max-w-6xl mx-auto px-4 pageAbout">
            {/* Header Identity Block Area */}
            <div className="title mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500">Introduction</span>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mt-1">About Me</h1>
                <h2 className="text-xl font-bold text-slate-700 mt-4">Who Am I?</h2>
                <div className="text-sm text-slate-600 leading-relaxed font-medium mt-3 space-y-4 max-w-3xl">
                    {paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </div>

            {/* Swipeable Platform Domain Showcase Field Layout */}
            <div className="relative flex justify-center items-center h-[460px] w-full bg-transparent overflow-visible my-16">
                {cards.map((card, index) => (
                    <SwipeCard 
                        key={card.id} // Retains immutable stable identification tracking bounds
                        card={{
                            id: index + 1, // Dynamically calculates active layers order layout (1 is front, 5 is back)
                            url: card.url,
                            label: card.label
                        }} 
                        update={updateCardStack} 
                    />
                ))}
            </div>

            {/* HIRE ME CALL-TO-ACTION PANEL */}
            <div className="w-full mt-16 p-8 rounded-2xl border border-amber-200 bg-amber-50/50 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div>
                    <h3 className="text-xl font-extrabold text-amber-900 tracking-tight">
                        Looking for an Experienced Engineering Leader?
                    </h3>
                    <p className="text-sm text-amber-800 font-medium mt-1">
                        Over 20+ corporate systems and cloud platforms delivered successfully worldwide.
                    </p>
                </div>
                <a 
                    href="#contact" 
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl transition-all duration-200 shadow-md shadow-amber-500/10 active:scale-[0.985] text-center whitespace-nowrap"
                >
                    Hire me
                </a>
            </div>
        </div>
    );
};

export default About;
