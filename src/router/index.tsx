import { lazy } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router';
import SwipeLayout from '../layout/SwipeLayout.tsx';

const BaseLayout = lazy(() => import('../layout/BaseLayout.tsx'));
const Chart = lazy(() => import('../pages/Chart.tsx'));
const Whook = lazy(() => import('../pages/Whook.tsx'));
const Event = lazy(() => import('../pages/Event.tsx'));
const News = lazy(() => import('../pages/News.tsx'));
const Store = lazy(() => import('../pages/Store.tsx'));
const Charger = lazy(() => import('../pages/Charger.tsx'));

export const routes = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={'/chart'} />,
      },
      {
        path: '/chart',
        element: (
          <SwipeLayout key={'chart'} nextPath={'/whook'} nextElement={<Whook />}>
            <Chart />
          </SwipeLayout>
        ),
      },
      {
        path: '/whook',
        element: (
          <SwipeLayout
            key={'whook'}
            prevPath={'/chart'}
            prevElement={<Chart />}
            nextPath={'/event'}
            nextElement={<Event />}
          >
            <Whook />
          </SwipeLayout>
        ),
      },
      {
        path: '/event',
        element: (
          <SwipeLayout
            key={'event'}
            prevPath={'/whook'}
            prevElement={<Whook />}
            nextPath={'/news'}
            nextElement={<News />}
          >
            <Event />
          </SwipeLayout>
        ),
      },
      {
        path: '/news',
        element: (
          <SwipeLayout
            key={'news'}
            prevPath={'/event'}
            prevElement={<Event />}
            nextPath={'/store'}
            nextElement={<Store />}
          >
            <News />
          </SwipeLayout>
        ),
      },
      {
        path: '/store',
        element: (
          <SwipeLayout
            key={'store'}
            prevPath={'/news'}
            prevElement={<News />}
            nextPath={'/charger'}
            nextElement={<Charger />}
          >
            <Store />
          </SwipeLayout>
        ),
      },
      {
        path: '/charger',
        element: (
          <SwipeLayout key={'charger'} prevPath={'/store'} prevElement={<Store />}>
            <Charger />
          </SwipeLayout>
        ),
      },
    ],
  },
];

export default createBrowserRouter(routes as RouteObject[]);
