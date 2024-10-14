import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import { useState } from "react";

const Education = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(c => !c)
    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>Certificates</h1>
                    <br/>
                    <h2>certificates</h2>
                </div>
                <div>
                    <Timeline>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Microsoft Certified Azure Fundamentals
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Issued Feb 2022
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Credential ID I133-6346
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Certified SAFe® 5 Practitioner
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Issues may 2021
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