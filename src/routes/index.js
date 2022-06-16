// public routes

import Home from '../pages/Home/index';
import Following from '../pages/Following/index';
import Profile from '../pages/Profile/index';

const publicRotues = [
    { path: '/', Component: Home },
    { path: '/following', Component: Following },
    { path: '/profile', Component: Profile },
];

const privateRotues = [];

export { publicRotues, privateRotues };
