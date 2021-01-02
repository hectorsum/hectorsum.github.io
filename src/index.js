import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './components/Root/Root';
import {ThemeProvider} from 'styled-components';
import * as theme from './config/theme';
import './index.css';

ReactDOM.render(
  <ThemeProvider theme={theme}> 
    <Root /> 
  </ThemeProvider>
  ,document.getElementById('root'));