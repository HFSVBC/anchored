import React, {useState, useEffect} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import SeverityCell from './SeverityCell';

const defaultColDef = {
  filter: 'agTextColumnFilter',
  resizable: true
};

const VulnerabilitiesGrid = ({
  accordionRef,
  layerMatches
}) => {
  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    let accordionRefValue = null;
    if (accordionRef.current) { accordionRefValue = accordionRef.current; }

    if (gridApi) {
      accordionRefValue.addEventListener('show.bs.collapse', () => {gridApi.sizeColumnsToFit()});
    }

    return () => {
      accordionRefValue.removeEventListener('show.bs.collapse', () => {gridApi.sizeColumnsToFit()});
    }
  }, [accordionRef, gridApi]);

  const rowData = layerMatches.map((match) => {
    return {
      id: match.vulnerability.id,
      sverity: match.vulnerability.severity,
      description: match.vulnerability.description,
      package: match.artifact.name,
      version: match.artifact.version,
    }
  });

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  //height: 42*8 + 97 + 48 = 481
  return (
    <div className="ag-theme-alpine" style={{height: 481, width: '100%'}}>
      <AgGridReact
        defaultColDef={defaultColDef}
        rowData={rowData}
        pagination={true}
        paginationPageSize={8}
        frameworkComponents={{severityCell: SeverityCell}}
        onGridReady={onGridReady}>
        <AgGridColumn headerName="Vulnerability">
          <AgGridColumn headerName="ID" field="id" minWidth={190}/>
          <AgGridColumn field="sverity" maxWidth={120} sortable={true} cellRenderer="severityCell"/>
          <AgGridColumn field="description" minWidth={500}/>
        </AgGridColumn>

        <AgGridColumn headerName="Artifact">
          <AgGridColumn field="package"/>
          <AgGridColumn field="version"/>
        </AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default VulnerabilitiesGrid;
