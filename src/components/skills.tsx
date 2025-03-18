import { Slider } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Skills = () => {

    // const [color, setColor] = useState('#000000')
    const [skillsData, setSkillsData] = useState([{label: "", value: ""}])
    useEffect(() => {
        fetch("http://localhost:3001/skills").then(
            response => response.json()
        ).then(
            data => setSkillsData(data.skills)
        )
    },[])

    const generateColor = () => {
        // console.log('#' + Math.floor(Math.random()*16777215).toString(16))
       return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
        // setColor('#' + randomColor);
    }

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
                    {
                        skillsData.map((e, index) => (
                            <div key={index}>
                                <h3>{e.label}</h3>
                                <Slider style={{backgroundColor: generateColor()}} defaultValue={e.value} value={50} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} placeholder={undefined} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Skills;