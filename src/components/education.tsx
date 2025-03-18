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
                    <br />
                    <h2>Education</h2>
                </div>
                <div>
                    <Timeline>
                        <TimelineItem className="h-40">
                            <TimelineConnector className="!w-[78px]" />
                            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                <TimelineIcon className="p-3 text-center" variant="ghost">
                                    <i className="fa-solid fa-building-columns h-5 w-6"></i>
                                </TimelineIcon>
                                <div className="flex flex-col gap-1">
                                    <Typography variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Bachelor of Engineering (Computer Science)
                                    </Typography>
                                    <Typography variant="paragraph" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        RSR Rungta College of Engineering and Technologies, Bhilai, Chhattisgarh
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        2008-2012
                                    </Typography>
                                </div>
                            </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-40">
                            <TimelineConnector className="!w-[78px]" />
                            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                <TimelineIcon className="p-3 text-center" variant="ghost" color="red">
                                    <i className="fa-solid fa-building-columns h-5 w-6"></i>
                                </TimelineIcon>
                                <div className="flex flex-col gap-1">
                                    <Typography variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        High School
                                    </Typography>
                                    <Typography variant="paragraph" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Bharat Mata H. Sc. School, Bilaspur, Chhattisgarh
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        2006-2007
                                    </Typography>
                                </div>
                            </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-40">
                            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                <TimelineIcon className="p-3 text-center" variant="ghost" color="green">
                                    <i className="fa-solid fa-building-columns h-5 w-6"></i>
                                </TimelineIcon>
                                <div className="flex flex-col gap-1">
                                    <Typography variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Secondary School
                                    </Typography>
                                    <Typography variant="paragraph" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Bharat Mata H. Sc. School, Bilaspur, Chhattisgarh
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        2004-2005
                                    </Typography>
                                </div>
                            </TimelineHeader>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </>
    )
}

export default Education;