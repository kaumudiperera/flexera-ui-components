import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BaseTheme } from '@flexera/ui-react-components';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import { Button, H1, Header, HeaderBrand, HeaderProduct, HeaderDivider, Link } from '@flexera/ui-react-components';
import { Grid } from './components/grid/Grid.component';
const mystyles = {
  margin: '2em'
} as React.CSSProperties;
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
          <Link href="http://localhost:3002/">Click me</Link>
          <div style={mystyles}>
          <Grid/>
          </div>
        </>
      </ThemeProvider>
  );
}

export default App;
