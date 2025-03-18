import { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import Ribbon from './../../assets/images/beautiful-red-ribbon.png'

  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;
  
  const TiltCard = (props: any) => {
    const ref = useRef<HTMLDivElement | null>(null);
  
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
  
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!ref.current) return [0, 0];
  
      const rect = ref.current.getBoundingClientRect();
  
      const width = rect.width;
      const height = rect.height;
  
      const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
      const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
  
      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
      const rY = mouseX / width - HALF_ROTATION_RANGE;
  
      x.set(rX);
      y.set(rY);
      
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    function CheckIcon() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        );
      }
  
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative h-[23rem] w-72 rounded-xl  from-indigo-300 to-indigo-300"
        
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
            backgroundImage: `url(${props.data.img})`,
          backgroundSize: '100% 100%'
          }}
          className="absolute inset-4 grid rounded-xl shadow-lg"
        >
            
          {/* <img src={Ribbon}/>   */}
          
          {/* <p
            style={{
              transform: "translateZ(50px) rotate(-45deg)",
            }}
            className="text-center text-2xl font-bold"
          >
            {props.data.title}
          </p> */}

{/* <Card variant="gradient" className="w-full max-w-[20rem] p-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    style={{
                            transform: "translateZ(50px)",
                          }}  >
                            <img src={props.img} alt="profile-picture" />
        
        <Typography
                            variant="h1"
                            color="black"
                            className="mt-6 flex justify-center gap-1 text-4xl font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          {props.data.title}
        </Typography>
      </CardHeader>
      <CardBody className="p-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography style={{
              transform: "translateZ(50px)",
            }}className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>5 team members</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>200+ components</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>40+ built-in pages</Typography>
          </li>
        </ul>
      </CardBody>
    </Card> */}

<p
            style={{
              transform: "translateZ(50px)",
              position: 'absolute',
              bottom: '-5rem',
              left: props.data.title.length>10 ? '3.5rem' : 0,
              right: props.data.title.length>10 ? '3rem' : 0
            }}
            className="text-center text-2xl font-bold"
          >
            {props.data.title}
          </p>

        </div>
        
      </motion.div>
    );
  };
  
  export default TiltCard;