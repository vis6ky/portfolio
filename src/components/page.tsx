import React, { Suspense } from 'react';

const Page = (props: any) => {
    // console.log(props)
    const MyLazyLoaded = React.lazy(() => import('./'+props.component));
    return (
        <>      
            <Suspense fallback={<div>Loading...</div>}>
                <MyLazyLoaded />
            </Suspense>
        </>
    )
}

export default Page;