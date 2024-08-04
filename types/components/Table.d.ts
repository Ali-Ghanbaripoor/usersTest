import MuiTable from "@mui/material/Table";
import * as React from "react";
interface MuiTable {
    dense: boolean;
    headerName: string;
    rows: (string | number | null)[][];
    locale: string;
}
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
declare const Table: React.FC<MuiTable>;
export default Table;
