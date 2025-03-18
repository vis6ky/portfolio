import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Work = () => {
    // const data = [
    //     {
    //       label: "HTML",
    //       value: "html",
    //       images: [
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    //         },
    //         {
    //           imageLink:
    //             "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    //         },
    //       ],
    //     },
    //     {
    //       label: "Angular",
    //       value: "angular",
    //       images: [
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    //         },
    //       ],
    //     },
    //     {
    //       label: "React",
    //       value: "react",
    //       images: [
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    //         },
    //       ],
    //     },
    //     {
    //       label: "PHP",
    //       value: "php",
    //       images: [
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    //         },
    //         {
    //           imageLink:
    //             "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    //         },
    //       ],
    //     },
    //     {
    //       label: "Wordpress",
    //       value: "wordpress",
    //       images: [
    //         {
    //           imageLink:
    //             "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    //         },
    //         {
    //           imageLink:
    //             "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //         },
    //         {
    //           imageLink:
    //             "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    //         },
    //       ],
    //     },
    //   ];
//   console.log("work component calls two times")
    const [workData, setWorkData] = useState([{label: "", value: "", images: [{"imageLink": ""}]}])

    useEffect(() => {
    //   console.log("call work api")
      fetch("http://localhost:3001/work").then(
        response => response.json()
      ).then(
        data => {
          setWorkData(data.work)
        }
      )
    },[])
    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>My Work</h1>
                    <br/>
                    <h2>Recent Work</h2>
                </div>
                <div>
                <Tabs value="html">
                    <TabsHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        {workData.map(({ label, value }) => (
                        <Tab key={value} value={value} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            {label}
                        </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className="grid grid-cols-1 gap-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        {workData.map(({ value, images }) => (
                        <TabPanel
                            className="grid grid-cols-2 gap-4 md:grid-cols-2"
                            key={value}
                            value={value}
                        >
                            {images?.map(({ imageLink }, index) => (
                            <div key={index}>
                                <img
                                className="h-[14rem] w-full max-w-full rounded-lg object-contain object-center"
                                src={imageLink}
                                alt="image-photo"
                                />
                            </div>
                            ))}
                        </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
                </div>
            </div>
        </>
    )
}

export default Work;