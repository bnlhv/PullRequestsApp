import React, { useMemo } from "react";
import { IPullRequest } from "../../types/PullRequestType";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { mockPullRequests } from "../../data/PullRequestsMockData";

interface Props {
  pullRequests: IPullRequest[] | null;
}

const PullRequestsTable: React.FC<Props> = (props: Props): JSX.Element => {
  const columnDefs = [
    { field: "serial" },
    { field: "title" },
    { field: "author" },
    { field: "createdAt" },
    { field: "description" },
    { field: "status" },
    { field: "labels" },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  return (
    <>
      <div
        className="ag-theme-alpine-dark"
        style={{ width: "100%", height: "40vh" }}
      >
        <AgGridReact
          rowData={props.pullRequests ? props.pullRequests : mockPullRequests}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
        />
      </div>
    </>
  );
};

export default PullRequestsTable;
