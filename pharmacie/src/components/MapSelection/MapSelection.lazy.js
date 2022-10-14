import React, { lazy, Suspense } from 'react';

const LazyMapSelection = lazy(() => import('./MapSelection'));

const MapSelection = props => (
  <Suspense fallback={null}>
    <LazyMapSelection {...props} />
  </Suspense>
);

export default MapSelection;
