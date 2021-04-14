import GridFile from "./GridPlugin/components/GridFile";
import GridSheet from "./GridPlugin/elements/GridSheet";
import GridColumn from "./GridPlugin/elements/GridColumn";

GridFile.GridSheet = GridSheet;
GridFile.GridColumn = GridColumn;

const ReactExport = {
  GridFile,
  GridSheet,
  GridColumn,
};

export default ReactExport;
exports.modules = {
  GridFile,
  GridSheet,
  GridColumn,
};
