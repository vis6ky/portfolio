import fullProfile from '../assets/images/fullprofile.jpg';
// import BgProgrammer from '../assets/images/bg-programmer.jpg';
import BgProgrammer from '../assets/images/bg-programmer-4.png';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
} from "@material-tailwind/react";
import { useRef } from 'react';
import DraggableCard from './animations/drag';
import JS from './../assets/images/js.png'
import HTML from './../assets/images/html.png'
import CSS from './../assets/images/css.png'
import ANGULAR from './../assets/images/angular.png'
import REACT from './../assets/images/react.png'
import NODEJS from './../assets/images/nodejs.png'
import TYPESCRIPT from './../assets/images/typescript.png'
import AZURE from './../assets/images/azure.png'
import GOOGLE from './../assets/images/google.png'
import PHP from './../assets/images/php.png'
  

const Home: React.FC = (props: any) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>PortFolio</h1>
                    <br/>
                    <h2>Resume</h2>
                </div>
                <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950" style={{minHeight: "70vh"}}>
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[100px]">
      Software Engineer<span className="text-indigo-500"></span>
      </h2>
      <div className="draggableBlock absolute inset-0 z-10" ref={containerRef}>
      <DraggableCard
        containerRef={containerRef}
        src={JS}
        alt="Example image"
        rotate="6deg"
        top="50%"
        left="40%"
        className="w-36 md:w-56"
      />
      <DraggableCard
        containerRef={containerRef}
        src={HTML}
        alt="Example image"
        rotate="12deg"
        top="10%"
        left="10%"
        className="w-24 md:w-48"
      />
      <DraggableCard
        containerRef={containerRef}
        src={CSS}
        alt="Example image"
        rotate="-6deg"
        top="30%"
        left="30%"
        className="w-52 md:w-80"
      />
      <DraggableCard
        containerRef={containerRef}
        src={ANGULAR}
        alt="Example image"
        rotate="8deg"
        top="10%"
        left="80%"
        className="w-48 md:w-72"
      />
      <DraggableCard
        containerRef={containerRef}
        src={REACT}
        alt="Example image"
        rotate="18deg"
        top="70%"
        left="70%"
        className="w-40 md:w-64"
      />
      <DraggableCard
        containerRef={containerRef}
        src={NODEJS}
        alt="Example image"
        rotate="-3deg"
        top="30%"
        left="65%"
        className="w-24 md:w-48"
      />
      <DraggableCard
        containerRef={containerRef}
        src={TYPESCRIPT}
        alt="Example image"
        rotate="-3deg"
        top="50%"
        left="60%"
        className="w-24 md:w-48"
      />
      <DraggableCard
        containerRef={containerRef}
        src={AZURE}
        alt="Example image"
        rotate="-3deg"
        top="90%"
        left="80%"
        className="w-24 md:w-48"
        />
      <DraggableCard
        containerRef={containerRef}
        src={GOOGLE}
        alt="Example image"
        rotate="-3deg"
        top="70%"
        left="30%"
        className="w-24 md:w-48"
      />
      <DraggableCard
        containerRef={containerRef}
        src={PHP}
        alt="Example image"
        rotate="-3deg"
        top="90%"
        left="10%"
        className="w-24 md:w-48"
      />
    </div>
    </section>
            </div>
        </>
    );
}

export default Home;