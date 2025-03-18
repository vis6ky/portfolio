import { Accordion, AccordionBody, AccordionHeader, Avatar, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";

interface IExperience {
    company: string;
    experiences: number;
    post: string;
    img: string;
    period: string;
    location: string;
    role: string[];
}

const Experience = () => {
    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true);

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    const experiences: IExperience[] = [
        {
            company: `Quess Corp`,
            experiences: 2,
            post: `Full Stack Developer`,
            img: `https://media.licdn.com/dms/image/v2/C5622AQF-Nz5NOMQ4vw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1674475259591?e=1744848000&v=beta&t=VyzL1Wq2l8hHFQ7l0XmLQ9SOj8VBkLrIsw-WqRKjuYM`,
            period: `Jun'23 - Current`,
            location: 'Dubai, United Arab Emirates',
            role: [
                `Streamlined application development by implementing efficient coding practices and software design patterns.`,
                `Conceived and built optimized landing pages in HTML and CSS for integration and cross-browser compatibility.`,
                `Developed user-oriented visuals and features using front-end languages to increase site traffic`,
                `Performed thorough code reviews to maintain coding standards and ensure optimal performance of developed applications.`
            ]
        },
        { 
            company: `Capgemini`, 
            experiences: 2,
            post: `Senior Consultant`, 
            img: `https://prod.ucwe.capgemini.com/in-en/wp-content/uploads/sites/18/2022/09/IMG_20200517_162442.jpg?w=2880&quality=70`,
            period: `Feb'21 - Apr'23`,
            location: 'Airoli, Navi Mumbai, India',
            role: [
                `Responsible for Leading UI team, Lead meetings, UI development, resolve complex problems, leading the best practices so team can follow, azure DevOps lead, follow agile scrum.`,
                `Presented findings and recommendations to executive-level stakeholders, effectively communicating key insights and action plans.`,
                `Mentored junior consultants, helping them enhance their skills and contribute more effectively to projects.`,
                `Delivered high-quality solutions for clients through comprehensive research and analysis of industry trends.`
            ]
        },
        {
            company: `RedMango Analytics`,
            experiences: 2,
            post: `Senior IT Developer`,
            img: `https://live.staticflickr.com/2577/4143145248_96ed532b30_b.jpg`,
            period: `Oct'19 - Feb'21`,
            location: 'Vashi, Navi Mumbai, India',
            role: [
                `Designed robust APls for seamless interaction between frontend applications and backend services, simplifying the overall architecture.`,
                `Collaborated with cross-functional teams to develop high-quality software solutions for diverse clients.`
            ]
        },
        {
            company: `Fourth Signal`,
            experiences: 2,
            post: `Technical Consultant`,
            img: `https://www.indiapropertyline.com/buildingImages/10303/Main.jpeg`,
            period: `Dec'16 - Sep'19`,
            location: 'Bandra & Thane, Mumbai, India',
            role: [
                `Facilitated knowledge transfer among team members by leading training sessions on new tools, techniques, or industry best practices relevant to the role of Technical Consultant.`,
                `Enhanced system performance by identifying and resolving technical issues through troubleshooting and root cause analysis.`,
                `Developed scalable applications using agile methodologies for timely project delivery.`,
                `Managed multiple projects simultaneously while maintaining strict deadlines and high-quality standards`
            ]
        }
    ]

const componentRef = useRef<HTMLDivElement>(null);
let caraSoulDom: any;
let sliderDom: any;
let thumbnailDom: any;

useEffect(() => {
    caraSoulDom = componentRef.current?.querySelector('.carousel')
    sliderDom = caraSoulDom?.querySelector('.list')
    thumbnailDom = componentRef.current?.querySelector('.thumbnail')
    // console.log('clicked', caraSoulDom, sliderDom, thumbnailDom) 
}, [])

const next = (item: IExperience) => {
    // console.log('clicked', caraSoulDom, sliderDom, thumbnailDom)
    if (caraSoulDom && sliderDom && thumbnailDom) {
        const sliderDomItems = sliderDom.querySelectorAll('.item')
        const thumbnailDomItems = thumbnailDom.querySelectorAll('.thumbnail .item')
        sliderDom.appendChild(sliderDomItems[0])
        thumbnailDom.appendChild(thumbnailDomItems[0])
        caraSoulDom?.classList.add('active')
        setTimeout(
            () => caraSoulDom?.classList.remove('active'),
            1000
        );
    }
}

return (
    <>
        <div className="container">
            <div className="title">
                <h1>Experience</h1>
                <br />
                <h2>Work Experience</h2>
            </div>
            <div className="expPage" ref={componentRef}>
                {/* <div style={{display: 'none'}}>
                    <Accordion open={alwaysOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader onClick={handleAlwaysOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Quess Corporation Management Services - Senior
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 1} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader onClick={() => handleOpen(1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Capgemini
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader onClick={() => handleOpen(2)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Red Mango Analytics Pvt Ltd
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader onClick={() => handleOpen(3)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Fourth Signal
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader onClick={() => handleOpen(4)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            OM SHANTI WEB SOLUTIONS INDIA PRIVATE LIMITED
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    </div> */}

                {/* <Timeline>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                            <TimelineIcon />
                                    <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Senior Full Stack Developer
                                    </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-2">
                            <Typography variant="h6" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Quess Corporation Management Services
                                    </Typography>
                                    <Typography variant="paragraph" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Dubai, United Arab Emirates
                                    </Typography>
                                <Typography color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    2007-2008
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                            <TimelineIcon />
                                    <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Senior Consultant
                                    </Typography>
                                    
                            </TimelineHeader>
                            <TimelineBody className="pb-2">
                            <Typography variant="h6" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Capgemini
                                    </Typography>
                                    <Typography variant="paragraph" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Airoli, Navi Mumbai, Maharashtra, India
                                    </Typography>
                                <Typography color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                2007-2008
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader>
                            <TimelineIcon />
                                    <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Senior IT Developer
                                    </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-2">
                            <Typography variant="h6" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Red Mango Analytics Pvt Ltd
                                    </Typography>
                                    <Typography variant="paragraph" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Vashi, Navi Mumbai, Maharashtra, India
                                    </Typography>
                                <Typography color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    2007-2008
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                            <TimelineHeader>
                            <TimelineIcon />
                                    <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Technical Lead
                                    </Typography>
                                    
                            </TimelineHeader>
                            <TimelineBody className="pb-2">
                            <Typography variant="h6" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Fourth Singnal
                                    </Typography>
                                    <Typography variant="paragraph" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Bandra, Mumbai, Maharashtra, India
                                    </Typography>
                                <Typography color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    2007-2008
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineHeader>
                            <TimelineIcon />
                                    <Typography variant="h5" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Senior PHP Developer
                                    </Typography>
                                    
                            </TimelineHeader>
                            <TimelineBody className="pb-2">
                            <Typography variant="h6" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Om Shanti Web Solutions India Pvt Ltd
                                    </Typography>
                                    <Typography variant="paragraph" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Nashik, Manharashtra, India
                                    </Typography>
                                <Typography color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    2007-2008
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    </Timeline> */}

                <div className="carousel">
                    <div className="list">
                        {
                            experiences.map((item, index) => (
                                <div key={index} className="item">
                                    <img src={item.img} />
                                    <div className="content">
                                        <div className="author">{item.company}</div>
                                        <div className="title">{item.post}</div>
                                        <div className="topic">{item.period}</div>
                                        <div className="topic">{item.location}</div>
                                        <div className="des">
                                            <ul>
                                                {item.role.map((itemDesc, indexKey) => (
                                                    <li key={indexKey}>{itemDesc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="thumbnail">
                        {
                            experiences.map((item, index) => (
                                <div key={index} className="item" onClick={() => next(item)}>
                                    <img src={item.img} />
                                    <div className="content">
                                        <div className="title">
                                            {item.company}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    </>
)
}

export default Experience;