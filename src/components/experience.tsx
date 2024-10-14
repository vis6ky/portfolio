import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";

const Experience = () => {
    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>Experience</h1>
                    <br/>
                    <h2>Work Experience</h2>
                </div>
                <div>
                    <Timeline>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Full Stack Developer 2017-2018
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                The key to more success is to have a lot of pillows. Put it this way, it took me
                                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                luv.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Front End Developer at Google Company 2017-2018
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                The key to more success is to have a lot of pillows. Put it this way, it took me
                                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                luv.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                System Analyst 2017-2018
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                The key to more success is to have a lot of pillows. Put it this way, it took me
                                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                luv.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                System Analyst 2017-2018
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                The key to more success is to have a lot of pillows. Put it this way, it took me
                                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                luv.
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

export default Experience;