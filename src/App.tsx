import { RouterProvider } from 'react-router';
import router from './router';

import 'swiper/css';
import 'swiper/css/pagination';

import { worker } from './mock/worker.ts';

if (import.meta.env.MODE === 'development') {
  worker.start();
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
