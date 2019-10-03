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
const download = () =>{
  let data = `<BeaconConfiguration xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <BeaconServices>
    <URL>http://batchhost.com/</URL>
    <UserName>126a865b-f23f-4366-9c3f-24671b1e535c</UserName>
    <Password Encrypted="true">!A1c4Ju0ha3LuFyiPfDnVA6QyrZOH1pe0HRew/yIGhaC23FO9dK+tpt4KEXSdMOrqyA</Password>
  </BeaconServices>
  <DownloadLocation>
    <URL>http://datahost.com/ManageSoftDL</URL>
    <UserName>126a865b-f23f-4366-9c3f-24671b1e535c</UserName>
    <Password Encrypted="true">!A1c4Ju0ha3LuFyiPfDnVA6QyrZOH1pe0HRew/yIGhaC23FO9dK+tpt4KEXSdMOrqyA</Password>
  </DownloadLocation>
  <UploadLocation>
    <URL>http://datahost.com/ManageSoftRL</URL>
    <UserName>126a865b-f23f-4366-9c3f-24671b1e535c</UserName>
    <Password Encrypted="true">!A1c4Ju0ha3LuFyiPfDnVA6QyrZOH1pe0HRew/yIGhaC23FO9dK+tpt4KEXSdMOrqyA</Password>
  </UploadLocation>
  <BeaconName>Beacon 2</BeaconName>
  <BeaconUID>126a865b-f23f-4366-9c3f-24671b1e535c</BeaconUID>
  <ParentUID>00000000-0000-0000-0000-000000000000</ParentUID>
</BeaconConfiguration>`;
const url = window.URL.createObjectURL(new Blob([data]));

const link = document.createElement('a');
link.href = url;
link.setAttribute('download', 'file.xml');
document.body.appendChild(link);
link.click();
document.body.removeChild(link);


}

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
          <Button name="Download" title="Download" onClick={()=>download()}>Download</Button>
          <div style={mystyles}>
          <Grid/>
          </div>
        </>
      </ThemeProvider>
  );
}

export default App;
