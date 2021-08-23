import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import PropTypes from 'prop-types';

import VulnerabilityModal from './VulnerabilityModal';
import IdCell from './IdCell';
import SeverityCell from './SeverityCell';
import SeverityFilter from './SeverityFilter';

const gridStyles = { minHeight: '480px', width: '100%' };

const defaultColDef = {
  filter: 'agTextColumnFilter',
  resizable: true,
};
const frameworkComponents = {
  idCell: IdCell,
  severityCell: SeverityCell,
  severityFilter: SeverityFilter,
};

const layerIndexValueGetter = (params) => params.data.artifact.locations[0].layerIndex;

const VulnerabilitiesGrid = ({
  matches,
}) => {
  const [rowData, setRowData] = useState();
  const [activeVulnerability, setActiveVulnerability] = useState();

  useEffect(() => {
    setRowData(
      matches.critical
        .concat(matches.high)
        .concat(matches.medium)
        .concat(matches.low)
        .concat(matches.negligible),
    );
  }, [matches]);

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };

  const onVulnerabilityIdClick = (vulnerability) => {
    setActiveVulnerability(vulnerability);
  };

  return (
    <>
      <div className="ag-theme-alpine flex-grow-1" style={gridStyles}>
        <AgGridReact
          rowData={rowData}
          paginationAutoPageSize="true"
          pagination="true"
          defaultColDef={defaultColDef}
          frameworkComponents={frameworkComponents}
          onGridReady={onGridReady}
        >
          <AgGridColumn headerName="Vulnerability">
            <AgGridColumn
              headerName="ID"
              field="vulnerability.id"
              minWidth={190}
              cellRenderer="idCell"
              cellRendererParams={{ onVulnerabilityIdClick }}
            />
            <AgGridColumn
              headerName="Severity"
              field="vulnerability.severity"
              minWidth={120}
              sortable="true"
              cellRenderer="severityCell"
              filter="severityFilter"
            />
            <AgGridColumn headerName="Description" field="vulnerability.description" minWidth={500} />
          </AgGridColumn>

          <AgGridColumn headerName="Artifact">
            <AgGridColumn headerName="Type" field="artifact.type" />
            <AgGridColumn headerName="Package" field="artifact.name" />
            <AgGridColumn headerName="Version" field="artifact.version" />
          </AgGridColumn>

          <AgGridColumn headerName="Layer">
            <AgGridColumn headerName="Index" valueGetter={layerIndexValueGetter} sortable="true" sort="desc" />
          </AgGridColumn>
        </AgGridReact>
      </div>

      <VulnerabilityModal vulnerability={activeVulnerability} />
    </>
  );
};

VulnerabilitiesGrid.propTypes = {
  matches: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default VulnerabilitiesGrid;
