import { Slider } from "@material-tailwind/react";

const Skills = () => {
    return (
        <>
            <div className="container pageSkills">
                <div className="title">
                    <h1>My Specialty</h1>
                    <br/>
                    <h2>My Skills</h2>
                </div>
                <div>
                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                </div>
                <br/>
                <div className="grid grid-cols-2 gap-4 skillBlock">
                
                    <div>
                        <h3>Photoshop</h3>
                        <Slider color="blue" defaultValue={50} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                    </div>
                    <div>
                        <h3>jQuery</h3>
                        <Slider color="red" defaultValue={50} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                    </div>
                    <div>
                        <h3>HTML5</h3>
                        <Slider color="amber" defaultValue={50} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                    </div>
                    <div>
                        <h3>CSS3</h3>
                        <Slider color="pink" defaultValue={50} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                    </div>
                    <div>
                        <h3>WordPress</h3>
                        <Slider color="green" defaultValue={50} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                    </div>
                    <div>
                        <h3>SEO</h3>
                        <Slider color="indigo" defaultValue={50} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;