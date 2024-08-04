import MuiTable from "@mui/material/Table";
import {
  Box,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface MuiTable {
  dense: boolean;
  headerName: string;
  rows: (string | number | null)[][];
  locale: string;
}

type Order = "asc" | "desc";

/**
 * # Table
 *
 * @example
 * `translations.json`
 * {
 *   "codenameTable": {
 *     "title": "translated name of the codename",
 *     "id": "translated id field",
 *     "fat": "translated f1 field",
 *     "calories": "translated f2 field",
 *     ...
 *   }
 * }
 *
 * `component`
 * <Table
 *   codename="test"
 *   headerName="name"
 *   rows={[
 *     ["name", "fat", "calories", "carbs", "protein"],
 *     ["Cupcake", null, 3.7, 67, 4.3],
 *     ["Donut", 452, 25.0, 51, 4.9],
 *     ["Eclair", 262, 16.0, 24, 6.0],
 *     ["Frozen yoghurt", 159, 6.0, 24, 4.0],
 *     ["Gingerbread", 356, 16.0, 49, 3.9],
 *     ["Honeycomb", 408, 3.2, 87, 6.5],
 *     ["Cream sandwich", 237, 9.0, 37, 4.3],
 *     ["Jelly Bean", 375, 0.0, 94, 0.0],
 *     ["KitKat", 518, 26.0, 65, 7.0],
 *     ["Lollipop", 392, 0.2, 98, 0.0],
 *     ["Marshmallow", 318, 0, 81, 2.0],
 *     ["Nougat", 360, 19.0, 9, 37.0],
 *     ["Oreo", 437, 18.0, 63, 4.0],
 *   ]}
 * />*
 *
 * ## Functionalities
 *
 * - {@link tableSortHandler}: Sorts table  by a property in "asc" | "desc" mode
 * - {@link emptyRows}: Shows proper layout about table page
 *
 * ## UI
 *
 * - {@link headerTitle}: Shows a header title label about this table
 * - {@link tableHeader}: Show a table header inside of table
 * - {@link tableBody}: Shows main table body
 * - {@link table}: Shows complete a Table UI with header, body and footer
 *
 * @returns {JSX.Element}
 */
const Table: React.FC<MuiTable> = ({
  dense = true,
  headerName,
  rows,
  locale,
}): JSX.Element => {
  const { t } = useTranslation();
  // Read label of Table header = [["header1", "header2"]]
  const headCellLabels = rows[0].map((value, index: number) => ({
    id: index,
    label: t(`${locale}.${value}`),
    disablePadding: false,
  }));

  const header = rows[0].indexOf(headerName);
  const data = rows.slice(1);

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<number>(header);
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  /**
   * # Table Sort Handler
   *
   * Sets table order base on a property.
   */
  const tableSortHandler = (
    event: React.MouseEvent<HTMLSpanElement>,
    property: number
  ) => {
    setOrder(orderBy === property && order === "asc" ? "desc" : "asc");
    setOrderBy(property);
  };

  /** Avoids a layout jump when reaching the last page with empty rows */
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  /** Table Header */
  const headerTitle: JSX.Element = (
    <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
      {/* Demonstrate a Table header label */}
      <Typography sx={{ flex: "1 1 100%" }} variant="h4">
        {t(`${locale}.title`)}
      </Typography>
    </Toolbar>
  );

  /** Table Header */
  const tableHeader: JSX.Element = (
    <TableHead>
      <TableRow>
        {React.Children.toArray(
          headCellLabels.map((headCell) => (
            <TableCell
              align="center"
              key={headCell.id}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              style={{ fontWeight: "bolder" }}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={(event: React.MouseEvent<HTMLSpanElement>) =>
                  tableSortHandler(event, headCell.id)
                }
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))
        )}
      </TableRow>
    </TableHead>
  );

  /** Table Body */
  const tableBody: JSX.Element = (
    <TableBody>
      {React.Children.toArray(
        data
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any[]) => (
            <TableRow hover tabIndex={-1} key={row[header]}>
              {React.Children.toArray(
                row.map((value: any, index: number) =>
                  header === index ? (
                    <TableCell
                      key={index}
                      align="center"
                      component="th"
                      padding="none"
                      scope="row"
                    >
                      {value}
                    </TableCell>
                  ) : (
                    <TableCell key={index} align="center">
                      {value ?? "-"}
                    </TableCell>
                  )
                )
              )}
            </TableRow>
          ))
      )}
      {emptyRows > 0 && (
        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );

  /** A fully functional @mui Table Container */
  const tableContainer: JSX.Element = (
    <TableContainer>
      <MuiTable
        sx={{ minWidth: 750 }}
        aria-labelledby="tableTitle"
        size={dense ? "small" : "medium"}
      >
        {React.Children.only(tableHeader)}
        {React.Children.only(tableBody)}
      </MuiTable>
    </TableContainer>
  );

  const table: JSX.Element = (
    <>
      {React.Children.only(tableContainer)}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage={t("tableSettings.rowsPerPage")}
        onPageChange={(event: unknown, newPage: number) => setPage(newPage)}
        onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
      />
    </>
  );

  return (
    <Paper variant="elevation">
      <div style={{ width: "100%" }}>{React.Children.only(headerTitle)}</div>
      {React.Children.only(table)}
    </Paper>
  );
};

export default Table;
