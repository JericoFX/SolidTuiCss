/* @refresh reload */
import { render } from 'solid-js/web';

import 'tuicss/dist/tuicss.min.css';
import './index.css';
import App from './App';

const root = document.getElementById('root');

render(() => <App />, root!);
