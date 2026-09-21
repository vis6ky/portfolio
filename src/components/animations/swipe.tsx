import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, useAnimationControls } from "framer-motion";

type Card = {
    id: number;
    url: string;
    label: string;
};

interface SwipeCardProps {
  card: Card;
  update: () => void;
}  

const SwipeCard: React.FC<SwipeCardProps> = ({ card, update }) => { 
    const x = useMotionValue(0);
    const controls = useAnimationControls();
  
    const isFront = card.id === 1;

    // 🌟 THE FINITE RECYCLING FIX: Clear animation cache hooks on queue rotation shifts
    useEffect(() => {
        if (isFront) {
            // Force reset motion coordinates to dead center before drawing the entry layer
            x.set(0); 
            controls.set({ x: 0, opacity: 1 });
        } else {
            // Animate background stack layers into their correct position smoothly
            controls.start({ x: 0, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } });
        }
    }, [card.id, isFront, controls, x]);

    // Progressive card fanning variables
    const getStackRotation = (id: number) => {
      if (id === 1) return 0;
      return id % 2 === 0 ? (4 * id) : -(4 * id);
    };

    const getStackTranslateY = (id: number) => `${(id - 1) * -8}px`;
    const getStackScale = (id: number) => 1 - (id - 1) * 0.035;
  
    // Live dragging transformations
    const rotateDrag = useTransform(x, [-200, 200], [-25, 25]);
    const opacityDrag = useTransform(x, [-180, 0, 180], [0.5, 1, 0.5]);

    const handleDragEnd = async (_: any, info: any) => {
      if (!isFront) return;

      const swipeThreshold = 120;
      
      if (info.offset.x > swipeThreshold) {
        // Swipe Right -> Slide off-screen cleanly, then shift the queue array
        await controls.start({ x: 450, opacity: 0, transition: { duration: 0.2 } });
        update();
      } else if (info.offset.x < -swipeThreshold) {
        // Swipe Left -> Slide off-screen cleanly, then shift the queue array
        await controls.start({ x: -450, opacity: 0, transition: { duration: 0.2 } });
        update();
      } else {
        // Snap back to center if threshold wasn't cleared
        controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300, damping: 22 } });
      }
    };
  
    return (
      <motion.div
        animate={controls}
        drag={isFront ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.65}
        onDragEnd={handleDragEnd}
        style={{
          x: isFront ? x : 0,
          rotate: isFront ? rotateDrag : getStackRotation(card.id),
          y: isFront ? 0 : getStackTranslateY(card.id),
          scale: isFront ? 1 : getStackScale(card.id),
          opacity: isFront ? opacityDrag : 1 - (card.id - 1) * 0.15,
          zIndex: 50 - card.id,
          transformStyle: "preserve-3d"
        }}
        className={`absolute w-[290px] h-[370px] rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden cursor-grab active:cursor-grabbing p-1.5 transition-shadow duration-300 ${
          isFront ? "hover:shadow-2xl z-40" : "pointer-events-none"
        }`}
      >
        <div className="w-full h-full rounded-xl bg-slate-50 flex flex-col justify-between items-center overflow-hidden border border-slate-100/60 relative group">
          <img
            src={card.url}
            alt={`${card.label} platform domain diagram`}
            className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />

          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200/50 py-2.5 px-4 rounded-xl shadow-md text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              {card.label} Infrastructure
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  export default SwipeCard;
