import {
  Checkbox,
  TableCell,
  TableRow,
  TableBody as MuTableBody,
} from "@material-ui/core";
import React from "react";
import { ILgxRow, ILgxTableHeadCell, Order } from "../../table.interfaces";
import { get } from "lodash";

export interface ITableBodyProps {
  page: number;
  rowsPerPage: number;
  selected: string[];
  setSelected: (data: string[]) => void;
  rows: ILgxRow[];
  orderBy: keyof ILgxRow;
  order: Order;
  headCells: ILgxTableHeadCell[];
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const TableBody = (props: ITableBodyProps) => {
  const {
    page,
    rowsPerPage,
    selected,
    setSelected,
    rows,
    order,
    orderBy,
    headCells,
  } = props;
  const isSelected = (name: any) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleClick = (name: any) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  return (
    <MuTableBody>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, i) => {
          const isItemSelected = isSelected(row.name);
          const labelId = `enhanced-table-checkbox-${i}`;

          return (
            <TableRow
              hover
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={i}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isItemSelected}
                  onClick={() => handleClick(row.name)}
                />
              </TableCell>
              {headCells.map((cell, j) => (
                <TableCell key={j} align="center">
                  {get(row, cell.value || cell.id)}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </MuTableBody>
  );
};

export default TableBody;
