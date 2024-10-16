import React, { useEffect, useRef } from 'react';
import avatar from '../assets/images/profile.png';
import {
    TabsHeader,
    Tab,
    IconButton
} from "@material-tailwind/react";

interface SidebarProps {
    setComponent: (e: any) => void;
    navigation: any[];
}

const Sidebar: React.FC<SidebarProps> = ({ setComponent, navigation }) => {

    const [activeTab, setActiveTab] = React.useState(navigation[0]['value']);
    
    return (
        <>
            <aside className="sidebar">
                <div className="row">
                    <div>
                        <div className="author-img" style={{ backgroundImage: `url(${avatar})` }}></div>
                        <h1><a href="/">Vishal Sharaf</a></h1>
                        <span><a href="#">FullStack Developer</a></span>
                    </div>
                    <TabsHeader className="bg-transparent" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                        indicatorProps={{ className: "bg-transparent shadow-none" }}>
                        {navigation.map(({ label, value }) => (
                            <Tab key={value} value={value} onClick={() => setActiveTab(value)} className={activeTab === value ? "activeTab" : ""} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>

                    <div className="footer">
                        <p>
                            <small>© Copyright {new Date().getFullYear()} All rights reserved.</small>
                        </p>
                        <div className="grid items-end gap-4 m-5">
                            <a href="https://www.linkedin.com/in/vishal-sharaf-3b78134a">
                                <IconButton size="sm" variant="outlined" className="rounded-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    <i className="fa-brands fa-linkedin"></i>
                                </IconButton>
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;