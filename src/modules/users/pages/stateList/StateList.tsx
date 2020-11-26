import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LgxTable from "../../../../components/table/Table";
import { ILgxTableHeadCell } from "../../../../components/table/table.interfaces";
import { IAppState } from "../../../../store/inferfaces";
import { getStates } from "../../../../store/slices/state.slice";

const headCells: ILgxTableHeadCell[] = [
  {
    id: "name",
    align: "center",
    label: "Name",
  },
  { id: "code", align: "center", label: "Code" },
  {
    id: "country",
    align: "center",
    label: "Country",
    value: "country.name",
  },
  {
    id: "createdAt",
    align: "center",
    label: "Created at",
  },
];

const StateList = () => {
  const dispatch = useDispatch();
  const {
    states: { data: rows, isLoading },
  } = useSelector((state: IAppState) => state.state);

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  return (
    <div>
      <h1>StateList</h1>
      <LgxTable title="States" {...{ headCells, rows, isLoading }} />
    </div>
  );
};

export default StateList;
