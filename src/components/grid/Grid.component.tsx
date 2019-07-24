import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';
import { Link } from '@flexera/ui-react-components';
import { TableLink } from './TableLink.Component';

const Count = (param: any) => {
  console.log(param);

  return <a className='link' href={'/beacon/${param.data.id}'} >{param.data.model} </a>;
};

export const Grid: React.FC = () => {



    const data = {
        columnDefs: [{
          headerName: "Make", field: "make", sortable: true, cellRendererFramework:  TableLink, cellRendererParams :{
            color: "#000"
          } 
        }, {
          headerName: "Model", field: "model", filter: true, cellRendererFramework:  Count,
        }, {
          headerName: "Price", field: "price"
        }],
        autoGroupColumnDef: {
          headerName: "Price",
          field: "price",
          cellRenderer: Count,
          cellRendererParams: {
            checkbox: true
          }
        },
        rowData: [{
          make: "Toyota", model: "Celica", price: 35000, id: 1
        }, {
          make: "Ford", model: "Mondeo", price: 32000, id: 2
        }, {
          make: "Porsche", model: "Boxter", price: 72000, id: 3
        }, {
          make: "Porsche", model: "Boxter", price: 72000, id: 4
        }]
      }
    
    // render() {
        return (
          <div 
            className="ag-theme-balham"
            style={{ 
            height: '500px', 
            width: '600px' }} 
          >
            <AgGridReact
             rowSelection="multiple"
              columnDefs={data.columnDefs}
              rowData={data.rowData}>
            </AgGridReact>
          </div>
        );
      
};
