import React, {FC, lazy, Suspense} from 'react';

// @ts-ignore
const Header: FC = lazy(() => import('MircoApp/Header'));

const Test1 = () => {
    return (
        <>
            <Suspense fallback={<div>Loading Header...</div>}>
                <Header/>
            </Suspense>

            <div>test page</div>
        </>
    )
}

export default Test1;
