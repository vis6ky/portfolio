import { Button, Card, CardBody, CardHeader, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import { useState } from "react";

interface ICertificate {
    certification: string,
    name: string,
    validity: string,
    img: string,
}

const Certificate = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(c => !c)
    const [eleClass, setEleClass] = useState('popCard')
    const [toggle, setToggle] = useState(false)
    const [curEle, setcurEle] = useState(0)

    const certificates: ICertificate[] = [
        { certification: `Scaled Agile Framework`, name: `Certified SAFe® 5 Practitioner - Expired`, validity: `Issued May 2021 - Expired May 2022`, img: `https://images.squarespace-cdn.com/content/v1/53589984e4b0ed47accdc174/1577643798670-Q87E1CN2LIUHEPQN9K6E/SAFe5-SGP_300px.png` },
        { certification: `Microsoft`, name: `Azure Fundamentals AZ-900`, validity: `Issued Feb 2022`, img: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/640px-Microsoft_Azure.svg.png`}
    ]

    const stackLeft = (index: number) => `${7*index}rem`
    const stackTop = (index: number) => `${6*index}rem`

    const popCard = (index: number) => {
        const currentIndex = index + 1
        if(!toggle && certificates.length != currentIndex){
            setEleClass('popCard')
            setcurEle(index+1)
            setToggle(true)
        }else{
            setEleClass('')
            setcurEle(0)
            setToggle(false)
        }
    }

    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>Certificates</h1>
                    <br />
                    <h2>certificates</h2>
                </div>
                <div style={{position: `relative`}}>
                    {/* <Timeline>
                        <TimelineItem className="h-40">
                            <TimelineConnector className="!w-[78px]" />
                            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                <TimelineIcon className="p-3 text-center" variant="ghost">
                                    <i className="fa-solid fa-certificate h-5 w-6"></i>
                                </TimelineIcon>
                                <div className="flex flex-col gap-1">
                                    <Typography variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Microsoft Certified Azure Fundamentals
                                    </Typography>
                                    <Typography variant="paragraph" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Issued Feb 2022
                                    </Typography>
                                    <Typography variant="small" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Credential ID I133-6346
                                    </Typography>
                                </div>
                            </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-40">
                            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                <TimelineIcon className="p-3 text-center" variant="ghost" color="red">
                                    <i className="fa-solid fa-certificate h-5 w-6"></i>
                                </TimelineIcon>
                                <div className="flex flex-col gap-1">
                                    <Typography variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Certified SAFe® 5 Practitioner
                                    </Typography>
                                    <Typography variant="paragraph" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Issues may 2021
                                    </Typography>
                                </div>
                            </TimelineHeader>
                        </TimelineItem>
                    </Timeline> */}

                    {
                        certificates.map((item, index) => (
                            <Card key={index} className={`w-full max-w-[35rem] flex-row certificateItem ${curEle==index+1 ? eleClass : ''}`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} style={{left: stackLeft(index), top: stackTop(index), border: `1px solid #eee`}} onClick={() => popCard(index)}>
                                <CardHeader
                                    shadow={false}
                                    floated={false}
                                    style={{backgroundColor: `#eee`}}
                                    className="m-0 w-1/5 shrink-0 rounded-r-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    <img
                                        src={item.img}
                                        alt="card-image"
                                        className="w-[100%] object-cover"
                                    />
                                </CardHeader>
                                <CardBody className="p-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    <Typography variant="h6" color="gray" className="mb-1 uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {item.certification}
                                    </Typography>
                                    <Typography variant="h4" color="blue-gray" className="mb-5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {item.name}
                                    </Typography>
                                    <Typography color="gray" className="mb-1 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {item.validity}
                                    </Typography>
                                    <a href="#" className="inline-block" style={{position: `absolute`,right: 0, bottom: `1rem`}}>
                                        <Button variant="text" className="flex items-center gap-2 py-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            See Certificate
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </Button>
                                    </a>
                                </CardBody>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Certificate;