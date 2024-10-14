import { Avatar, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const Blog = () => {
    return (
        <>
            <div className="container">
                <div className="title">
                    <h1>Read</h1>
                    <br/>
                    <h2>Recent Blog</h2>
                </div>
                <div>
                <Card shadow={false} className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                    </CardHeader>
                    <CardBody className="relative py-14 px-6 md:px-12" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Typography
                                variant="h2"
                                color="white"
                                className="mb-6 font-medium leading-[1.5]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                        How we design and code open-source projects?
                        </Typography>
                        <Typography variant="h5" className="mb-4 text-gray-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Tania Andrew
                        </Typography>
                        <Avatar
                            size="xl"
                            variant="circular"
                            alt="tania andrew"
                            className="border-2 border-white"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        />
                    </CardBody>
                </Card>
                </div>
            </div>
            
        </>
    )
}

export default Blog;