import fullProfile from '../assets/images/fullprofile2.jpg';
import {
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader,
  } from "@material-tailwind/react";
import Finance from '../assets/images/finance.png';
import B2B from '../assets/images/b2b1.png';
import B2C from '../assets/images/b2c2.png';
import Saas from '../assets/images/saas1.jpg';
import Cms from '../assets/images/cms.png';
import TiltCard from './animations/tiltcard';
import { useEffect, useState } from 'react';
import SwipeCard from './animations/swipe';
import card from '@material-tailwind/react/theme/components/card';

type Card = {
    id: number;
    url: string;
    label: string;
  };

const About = () => {
    
    const cardData: Card[] = [
        {id: 1, label: 'CMS', url: Cms},
        {id: 2, label: 'B2C', url: B2C},
        {id: 3, label: 'B2B', url: B2B},
        {id: 4, label: 'Saas', url: Saas},
        {id: 5, label: 'Finance', url: Finance},
    ]

    let [cards, setCards] = useState<Card[]>(cardData);

    const updateCardStack = () => {
        const shiftCard: any = cards.shift()
        cards = [...cards, shiftCard];
        setCards(cards)
    }

    return (
        <>
            <div className="container pageAbout">
                <div className="title">
                    <h1>About Us</h1>
                    <br/>
                    <h2>Who Am I?</h2>
                    <p><strong>Hi I'm Vishal Sharaf</strong> As a seasoned Full Stack Developer, I bring over eight years of extensive experience in the IT industry to the table. My expertise lies in seamlessly integrating front-end and back-end development to deliver comprehensive solutions that meet and exceed expectations.</p>
                    <br/>
                    <p>With a proven track record in the field, I am well-equipped to tackle complex challenges and drive successful project outcomes.</p>
                </div>
                <div className=" grid h-[500px] w-full place-items-center"
                >
                    {cards.map((card, index) => (

                        /*<Card key={index} className="flex-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <CardHeader floated={false} className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <img src={e.images} alt="profile-picture" />
                            </CardHeader>
                            <CardBody className="text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {e.label}
                                </Typography>
                            </CardBody>
                        </Card>*/
                        <SwipeCard card={{
                            id: index+1,
                            url: card.url,
                            label: card.label
                        }} update={updateCardStack} key={index+1} />
                        /*<TiltCard key={index} label={e.label} img={e.images}/>*/
                    ))}
                </div>
                <div className="blockHireMe" style={{marginTop: "5em"}}>
                    <h2>I am happy to tell you <br />that 20+ projects done sucessfully!</h2>
                    <a href="#">Hire me</a>
                </div>
            </div>
        </>
    );
}

export default About