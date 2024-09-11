import React, {FC, lazy, Suspense} from 'react';

// @ts-ignore
const Header: FC = lazy(() => import('MircoApp/Header'));

const Test1 = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            gap: '50px',
        }}>
            <h1>Load Remote Component Page</h1>

            <Suspense fallback={<div>Loading Header...</div>}>
                <Header/>
            </Suspense>
        </div>
    )
}

export default Test1;
