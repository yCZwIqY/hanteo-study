import { RouterProvider } from 'react-router';
import router from './router';
import 'swiper/css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
