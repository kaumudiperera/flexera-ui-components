import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BaseTheme } from '@flexera/ui-react-components';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import { Button, H1, Header, HeaderBrand, HeaderProduct, HeaderDivider, HeaderRight } from '@flexera/ui-react-components';


const sharedProps = {
  name: 'buttonName',
  title: 'buttonTitle',
  m: 'lg',
};
const App: React.FC = () => {
  console.log(BaseTheme);
  return (

      <ThemeProvider theme={BaseTheme}>
        
        <>
        <Header fixed={false}>
        <HeaderBrand  />
        <HeaderDivider />
        <HeaderProduct>ProductName</HeaderProduct>
        </Header>
          <H1>New Header</H1>
          <Button variant="primary"  name="button" title="title">Click me</Button>
        </>
      </ThemeProvider>

  );
}

export default App;
