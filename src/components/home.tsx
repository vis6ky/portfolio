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
  

const Home: React.FC = (props: any) => {
    const data = [
        {
            label: "HTML",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "React",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },

        {
            label: "Vue",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },

        {
            label: "Angular",
            value: "angular",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },

        {
            label: "Svelte",
            value: "svelte",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>PortFolio</h1>
                    <br/>
                    <h2>Resume</h2>
                </div>
                <div className="row profile" style={{ backgroundImage: `url(${BgProgrammer})` }}>
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp" style={{ height: '584px' }}>
                        <div className="slider-text-inner">
                            <div className="desc">
                                <h1>I am a <b>Software Engineer</b></h1>
                                <h2>This portfolio has been created with <b>React</b> and <b>Tailwind</b></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;