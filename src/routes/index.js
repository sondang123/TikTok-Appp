//layout

import HeaderOnly from '~/layouts/HeaderOnly';

import config from '~/config';
//page

import Home from '~/pages/Home/index.js';
import Following from '~/pages/Following/index.js';
import Profile from '~/pages/Profile/index.js';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// public routes
const publicRotues = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.Upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRotues = [];

export { publicRotues, privateRotues };
