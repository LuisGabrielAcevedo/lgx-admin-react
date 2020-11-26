import React from "react";
import { TablePagination as MuTablePagination } from "@material-ui/core";

interface ITablePagintationProps {
  total: number;
  rowsPerPage: number;
  page: number;
}

const TablePagination = (props: ITablePagintationProps) => {
  const { total, rowsPerPage, page } = props;

  // return (
  //   <MuTablePagination
  //     rowsPerPageOptions={[5, 10, 25]}
  //     component="div"
  //     count={total}
  //     onChangePage={handleChangePage}
  //     onChangeRowsPerPage={handleChangeRowsPerPage}
  //     {...{ rowsPerPage, page }}
  //   />
  // );
};

export default TablePagination;
