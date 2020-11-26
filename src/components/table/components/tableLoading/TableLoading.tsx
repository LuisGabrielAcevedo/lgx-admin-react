import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

interface ITableLoadingProps {
  isLoading?: boolean;
}

const TableLoading = (props: ITableLoadingProps) => {
  const { isLoading } = props;
  return isLoading ? <LinearProgress /> : null;
};

export default TableLoading;
