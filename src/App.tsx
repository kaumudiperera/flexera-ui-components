import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BaseTheme } from '@flexera/ui-react-components';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import { Button, H1 } from '@flexera/ui-react-components';


const sharedProps = {
  name: 'buttonName',
  title: 'buttonTitle',
  m: 'lg',
};
const App: React.FC = () => {
  console.log(BaseTheme);
  return (
    <StyleSheetManager target={document.head}>
      <ThemeProvider theme={BaseTheme}>
        <div>
          <H1>New Header</H1>
          <Button variant="outline"  {...sharedProps}>Logout</Button>
        </div>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
