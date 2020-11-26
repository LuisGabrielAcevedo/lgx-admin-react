import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import TableToobar from "./components/tableToolbar/TableToolbar";
import { ILgxRow, ILgxTableHeadCell, Order } from "./table.interfaces";
import TableHead from "./components/tableHead/TableHead";
import TableBody from "./components/tableBody/TableBody";
import useTableStyles from "./table.styles";
import TableLoading from "./components/tableLoading/TableLoading";
import { Divider } from "@material-ui/core";

export interface ILgxTableProps {
  headCells: ILgxTableHeadCell[];
  rows: ILgxRow[];
  title?: string;
  isLoading?: boolean;
}

const LgxTable = (props: ILgxTableProps) => {
  const { title, isLoading, headCells, rows } = props;
  const classes = useTableStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<string>("calories");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToobar title={title || ""} numSelected={selected.length} />
        <Divider />
        <TableLoading {...{ isLoading }} />
        <TableContainer>
          <Table className={classes.table}>
            <TableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              {...{ headCells }}
            />
            <TableBody
              {...{
                page,
                rowsPerPage,
                selected,
                setSelected,
                rows,
                order,
                orderBy,
                headCells,
              }}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          {...{ rowsPerPage, page }}
        />
      </Paper>
    </div>
  );
};

export default LgxTable;
