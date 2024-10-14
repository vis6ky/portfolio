// import React from 'react';
import { createContext, useState } from 'react';
import './App.css';
import Page from './components/page';
import Sidebar from './components/sidebar';
import { ThemeProvider, useTheme } from '@material-tailwind/react';
import {
  Tabs,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";

const App = () => {

  const[component, setComponent] = useState("home")

  const handleDataFromSideBar = (e: any) => {
    setComponent(e.target.id)
  }

  const data: any[] = [
    {
      label: "Home",
    },
    {
      label: "About",
    }, 
    {
      label: "Services",
    }, 
    {
      label: "Skills",
    }, 
    {
      label: "Education",
    }, 
    {
      label: "Certificates",
    }, 
    {
      label: "Experience",
    }, 
    {
      label: "Work",
    },
    {
      label: "Blog",
    },
    {
      label: "Contact",
    }
  ].map((e: any) => ({...e, value: e.label.toLowerCase()}))


  return (
    <div className="App">
      <Tabs value="html" orientation="vertical">
        <Sidebar setComponent={handleDataFromSideBar} navigation={data}/>
        <aside className={`mainContent ${component}`}>
          <TabsBody
              animate={{
                  initial: { y: 250 },
                  mount: { y: 0 },
                  unmount: { y: 250 },
              }} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
              {data.map(({ value }) => (
              <TabPanel key={value} value={value}>
                  <Page component={value}/>
              </TabPanel>
              ))}
          </TabsBody>
        </aside>
      </Tabs>
    </div>
  );
}

export default App;
