import { IconName, IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode, faWebAwesome, faDatabase, faCommenting, faPeopleGroup  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import TiltCard from "./animations/tiltcard";
import UIDEV from "./../assets/images/ui-dev.jpg"

const Services = () => {

    const [servicesData, setServicesData] = useState([{title: "", describe: "", icon: "", color: ""}])
    const [active, setActive] = useState(3)
    useEffect(() => {
        fetch('http://localhost:3001/services').then(
            response => response.json()
        ).then(
            data => setServicesData(data.services)
        )
    },[])
    
    const transform = (index: number) => {
        return index == active ? 'none' :
                            index > active ? `translateX(${120*(index-active)}px) scale(${1 - 0.2*(index-active)}) perspective(16px) rotateY(-1deg)` : 
                                        `translateX(${-120*(active-index)}px) scale(${1 - 0.2*(active-index)}) perspective(16px) rotateY(1deg)`
    }
    const zindex = (index: number) => {
        return index == active ? 1 : 
                            index > active ? -(index-active) : 
                                        -(active-index)
    }
    const filter = (index: number) => {
        return index == active ? 'none' : 'blur(5px)';
    }
    const opacity = (index: number) => {
        return index == active ? 1 :
                            (index-active) > 2 || (active-index) > 2 ? 0 : 0.6
    }

    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>What I do?</h1>
                    <br />
                    <h2>Here are some of my expertise</h2>
                </div>
                <div className="flex gap-4 flex-wrap servicesBlock">
                    {
                        servicesData.map((e, index) => (

                            // <Card key={index} style={{borderBottom: `2px solid ${e.color}`}} className="w-80 flex-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            //     <CardHeader
                            //         className="grid place-items-center shadow-none"
                            //         placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            //         <Typography className="w-28 place-items-center grid h-28 before:content-[''] before:services-card-header after:content-[''] after:services-card-header" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            //             {/* <FontAwesomeIcon className="svgBlock" color="white" icon={["fal", "coffee"]}/> */}
                            //             <i color="black" className={`fa fa-${e.icon}`} aria-hidden="true"></i>
                            //         </Typography>
                            //     </CardHeader>
                            //     <CardBody className="flex flex-col gap-4 place-items-center text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            //         <Typography variant="h4" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            //             {e.title}
                            //         </Typography>
                            //         <Typography variant="lead" color="gray" className="mt-3 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            //             {e.describe}
                            //         </Typography>
                            //     </CardBody>
                            // </Card>
<div key={index} onClick={() => setActive(index+1)} style={{
    transform: transform(index+1),
    zIndex: zindex(index+1),
    filter: filter(index+1),
    opacity: opacity(index+1),
}}>
<TiltCard data={e}/>
</div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Services;