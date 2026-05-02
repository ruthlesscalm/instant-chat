import { createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/Landing';
import JoinRoom from '../pages/JoinRoom';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/join/:roomId',
        element: <JoinRoom />,
    },
]);

export default Router;
