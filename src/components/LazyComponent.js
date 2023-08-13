import React, { Suspense } from 'react';
import SkeletonLoading from "components/SkeletonLoading"
const LazyComponent = (
    Component
) => {

    return () => (
        <Suspense fallback={<SkeletonLoading />}>
            <Component />
        </Suspense>
    );
};

export default LazyComponent;
