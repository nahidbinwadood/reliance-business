import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Homepage from '../Pages/Homepage/Homepage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_prependBasename: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
