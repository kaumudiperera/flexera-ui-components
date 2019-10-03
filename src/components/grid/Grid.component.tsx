import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import { TableLink } from './TableLink.Component';

const Count = (param: any) => {
  console.log(param);

  return <a className='link' href={'/beacon/${param.data.id}'} >{param.data.model} </a>;
};

export const Grid: React.FC = () => {



    const data = {
        columnDefs: [{
          headerName: "Make", field: "make", sortable: true,  suppressToolPanel: true, cellRendererFramework:  TableLink, cellRendererParams :{
            color: "#000"
          } 
        }, {
          headerName: "Model", field: "model", filter: true, cellRendererFramework:  Count,
        }, {
          headerName: "Price", children: [{headerName: "price", field: "price", suppressToolPanel: true}, {headerName: "price1", field: "price"}, {headerName: "id", field: "id"}]
        }],
        autoGroupColumnDef: {
          headerName: "Price",
          field: "price",
          cellRenderer: Count,
          cellRendererParams: {
            checkbox: true
          }
        },
        sideBar:{toolPanels: [{
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          toolPanelParams: {
              suppressRowGroups: true,
              suppressValues: true,
              suppressPivots: true,
              suppressPivotMode: true,
              suppressSideButtons: true,
              suppressColumnFilter: true,
              suppressColumnSelectAll: true,
              suppressColumnExpandAll: true
          }
      }],
      defaultToolPanel: 'columns'},
        defaultColDef: {
          // allow every column to be aggregated
          enableValue: true,
          // allow every column to be grouped
          enableRowGroup: true,
          // allow every column to be pivoted
          enablePivot: true,
          sortable: true,
          filter: true
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
            width: '100%' }} 
          >
            <AgGridReact
             rowSelection="multiple"
              columnDefs={data.columnDefs}
              sideBar={data.sideBar}
              
              rowData={data.rowData}>
            </AgGridReact>
          </div>
        );
      
};
