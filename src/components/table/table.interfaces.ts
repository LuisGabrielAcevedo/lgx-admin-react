export interface ILgxRow {
  [key: string]: any;
}

export interface ILgxTableHeadCell {
  disablePadding?: boolean;
  id: string;
  label: string;
  align: "inherit" | "left" | "center" | "right" | "justify";
  value?: string;
}

export type Order = "asc" | "desc";
