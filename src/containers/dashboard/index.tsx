import React from 'react';

const LazyDashboard = React.lazy(() =>
  import(/* webpackChunkName: "Dashboard" */ './dashboard')
);

const Dashboard = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyDashboard {...props} />
  </React.Suspense>
);

export default Dashboard