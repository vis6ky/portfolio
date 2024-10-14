import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import { useState } from "react";

const Education = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(c => !c)
    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>Education</h1>
                    <br/>
                    <h2>Education</h2>
                </div>
                <div>
                    <Timeline>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Bachelor of Engineering (Computer Science) 2008-2012
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    RSR Rungta College of Engineering and Technologies, Bhilai, Chhattisgarh
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                High School 2006-2007
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Bharat Mata H. Sc. School, Bilaspur, Chhattisgarh
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Secondary School 2004-2005
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Bharat Mata H. Sc. School, Bilaspur, Chhattisgarh
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                            </TimelineHeader>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </>
    )
}

export default Education;