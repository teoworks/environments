import * as React from 'react';
import { render } from 'react-dom';

import { App } from './app';

import 'semantic-ui-css/semantic.min.css';
import './assets/styles/semantic.teoworks.css';
import './assets/styles/default.css';

render(
    <App />,
    document.getElementById('root')
);