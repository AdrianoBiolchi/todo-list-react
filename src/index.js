import React from 'react';
import { render }from 'react-dom';
import * as serviceWorker from './serviceWorker';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faSyncAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
// Components
import Layout from './pages/Layout';
import './style/theme.css';

library.add(faCircle, faPlus);



render(
    <Layout />,
    document.getElementById('root')
);

serviceWorker.unregister();