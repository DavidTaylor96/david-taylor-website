import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import HomeScreen from './screens/home/home-screen';

ReactDOM.render(
  <StrictMode>
    <HomeScreen />
  </StrictMode>,
  document.getElementById('root')
);
