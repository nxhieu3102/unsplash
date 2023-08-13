import React, { Suspense } from 'react';
import { Spin } from 'antd';
const LazyComponent = (
    Component
) => {

    return () => (
        <Suspense fallback={
            <Spin delay={10} spinning={true}>
                <div className='w-[100vw] h-[100vh]'>
                </div>
            </Spin>
        }>
            <Component />
        </Suspense>
    );
};

export default LazyComponent;
