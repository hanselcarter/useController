import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Router, RouteComponentProps } from '@reach/router';

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
const root = document.getElementById('app-root');

ReactDOM.render(<App></App>, root);
