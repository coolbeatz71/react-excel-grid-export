/* index.d.ts (C) react-data-export */

// TypeScript Version: 2.2
declare module "react-data-export" {
  import * as React from "react";

  export interface GridFileProps {
    filename?: string;
    fileExtension?: string;
    element?: any; //Download Element
    children?: Array<React.ReactChild> | React.ReactChild; // Array<GridSheetProps>;
  }

  export interface GridSheetProps {
    name: string;
    data?: Array<object>;
    dataSet?: Array<GridSheetData>;
    value?: Array<string> | Function;
    children?: Array<React.ReactChild> | React.ReactChild; // Array<GridColumnProps>
  }

  export interface GridSheetData {
    xSteps?: number;
    ySteps?: number;
    columns: Array<string>;
    data: Array<GridCellData>;
  }

  export type GridCellData = GridValue | GridCell | Array<GridValue>;
  export type GridValue = string | number | Date | boolean;

  export interface GridCell {
    value: GridCell;
    style: GridStyle;
  }

  export interface GridColumnProps {
    label: string;
    value: number | boolean | string | Function;
  }

  export interface GridStyle {
    fill?: GridCellFillType;
    font?: GridFont;
    numFmt?: GridNumFormat;
    alignment?: GridAlignment;
    border?: GridBorder;
  }

  /* GridCell Fill Type */
  export type GridCellPatternType = "solid" | "none";

  export interface GridColorSpec {
    auto?: number; //default 1
    rgb?: string; //hex ARGB color
    theme?: GridTheme;
    indexed?: number;
  }

  export interface GridTheme {
    theme: string;
    tint: string;
  }

  export interface GridCellFillType {
    patternType?: GridCellPatternType;
    fgColor?: GridColorSpec;
    bgColor?: GridColorSpec;
  }

  /* Grid Font */
  export interface GridFont {
    name?: string; // default `"Calibri"`
    sz?: number; //font size in points default 11
    color?: GridColorSpec;
    bold?: boolean;
    underline?: boolean;
    italic?: boolean;
    strike?: boolean;
    outline?: boolean;
    shadow?: boolean;
    vertAlign?: boolean;
  }

  /* GridNumFormat */
  export type GridNumFormat =
    | "0"
    | "0.00%"
    | "0.0%"
    | "0.00%;\\(0.00%\\);\\-;@"
    | "m/dd/yy"
    | string;

  /* GridAlignment */
  export interface GridAlignment {
    vertical?: GridAlignmentType;
    horizontal?: GridAlignmentType;
    wrapText?: boolean;
    readingOrder?: GridReadingOrder;
    textRotation?: GridTextRotation;
  }

  export type GridTextRotation = 0 | 45 | 90 | 135 | 180 | 255;

  export enum GridReadingOrder {
    LeftToRight = 1,
    RightToLeft,
  }

  export type GridAlignmentType = "bottom" | "center" | "top";

  /* GridBorder */
  export interface GridBorder {
    style: GridBorderStyle;
    color: GridColorSpec;
  }

  export type GridBorderStyle =
    | "thin"
    | "medium"
    | "thick"
    | "dotted"
    | "hair"
    | "dashed"
    | "mediumDashed"
    | "dashDot"
    | "mediumDashDot"
    | "dashDotDot"
    | "mediumDashDotDot"
    | "slantDashDot";

  export class GridColumn extends React.Component<GridColumnProps, any> {}

  export class GridSheet extends React.Component<GridSheetProps, any> {}

  export class GridFile extends React.Component<GridFileProps, any> {}

  export namespace ReactExport {
    export class GridFile extends React.Component<GridFileProps, any> {}
  }
  export default ReactExport;
}
