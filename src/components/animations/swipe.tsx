import { motion, useMotionValue, useTransform } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type Card = {
    id: number;
    url: string;
    label: string;
  };

interface SwipeCard {
  update: Dispatch<SetStateAction<Card>>;
  card: Card;
}  

const SwipeCard = ({
    update,
    card,
  }: SwipeCard) => { 
    const x = useMotionValue(0);
  
    const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
    
    const isFront = card.id === 1;
  
    const rotate = useTransform(() => {
      const offset = isFront ? 0 : card.id % 2 ? (6*card.id) : -(6*card.id);
      return `${rotateRaw.get() + offset}deg`;
    });
  
    const handleDragEnd = () => {
      if (Math.abs(x.get()) > 100) {
        update(card)
      }
    };
  
    return (
      <motion.img
        src={card.url}
        alt="Placeholder alt"
        className="h-96 w-72 origin-bottom rounded-lg bg-white object-fill hover:cursor-grab active:cursor-grabbing"
        style={{
          gridRow: 1,
          gridColumn: 1,
          x,
          opacity,
          rotate,
          transition: "0.125s transform",
          boxShadow: isFront
            ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
            : undefined,
          zIndex: isFront ? 1 : -(card.id)
        }}
        animate={{
          scale: isFront ? 1 : 0.98,
        }}
        drag={isFront ? "x" : false}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragEnd={handleDragEnd}
      />
    );
  };

  export default SwipeCard;