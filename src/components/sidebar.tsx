import React from 'react';
import avatar from '../assets/images/profile.png';
import {
    TabsHeader,
    Tab
} from "@material-tailwind/react";

interface SidebarProps {
    setComponent: (e: any) => void;
    navigation: any[];
}

const Sidebar: React.FC<SidebarProps> = ({setComponent, navigation}) => {
    console.log(navigation, navigation[0]['value'])
    const [activeTab, setActiveTab] = React.useState(navigation[0]['value']);
    return (
        <>
            <aside className="sidebar">
                <div className="row">
                    <div>
                        <div className="author-img" style={{backgroundImage: `url(${avatar})`}}></div>
                        <h1><a href="/">Vishal Sharaf</a></h1>
                        <span><a href="#">UI Developer</a> in India</span>
                    </div>
                    <TabsHeader className="bg-transparent" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                    indicatorProps={{ className: "bg-transparent shadow-none" }}>
                        {navigation.map(({ label, value }) => (
                        <Tab key={value} value={value} onClick={() => setActiveTab(value)} className={activeTab===value? "activeTab" : ""} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            {label}
                        </Tab>
                        ))}
                    </TabsHeader>
                    {/* <nav role="navigation">
                        <div>
                            <ul>
                                <li><a href="#" id="home" onClick={setComponent}>Home</a></li>
                                <li><a href="#" id="about" onClick={setComponent}>About</a></li>
                                <li><a href="#" id="services" onClick={setComponent}>Services</a></li>
                                <li><a href="#" id="skills" onClick={setComponent}>Skills</a></li>
                                <li><a href="#" id="education" onClick={setComponent}>Education</a></li>
                                <li><a href="#" id="experience" onClick={setComponent}>Experience</a></li>
                                <li><a href="#" id="work" onClick={setComponent}>Work</a></li>
                                <li><a href="#" id="blog" onClick={setComponent}>Blog</a></li>
                                <li><a href="#" id="contact" onClick={setComponent}>Contact</a></li>
                            </ul>
                        </div>
                    </nav> */}

                    <div className="footer">
                        <p>
                            <small>© Copyright <script>document.write(new Date().getFullYear());</script>2024 All rights reserved. Made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            <span>Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></span> <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p>
                        <ul>
                            <li><a href="#"><i className="icon-facebook2"></i></a></li>
                            <li><a href="#"><i className="icon-twitter2"></i></a></li>
                            <li><a href="#"><i className="icon-instagram"></i></a></li>
                            <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;