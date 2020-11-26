import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LgxTable from "../../../../components/table/Table";
import { ILgxTableHeadCell } from "../../../../components/table/table.interfaces";
import { IAppState } from "../../../../store/inferfaces";
import { getApplications } from "../../../../store/slices/application.slice";

const headCells: ILgxTableHeadCell[] = [
  {
    id: "description",
    align: "center",
    label: "Description",
  },
  {
    id: "appType",
    align: "center",
    label: "Type",
  },
];

const ApplicationList = () => {
  const dispatch = useDispatch();
  const {
    applications: { data: rows, isLoading },
  } = useSelector((state: IAppState) => state.application);

  useEffect(() => {
    dispatch(getApplications());
  }, [dispatch]);
  return (
    <div>
      <h1>ApplicationList</h1>
      <LgxTable title="States" {...{ headCells, rows, isLoading }} />
    </div>
  );
};

export default ApplicationList;
