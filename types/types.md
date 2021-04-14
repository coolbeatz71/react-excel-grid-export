```javascript
/* index.d.ts (C) react-data- */

// TypeScript Version: 2.2

interface GridFileProps {
    filename?: string;
    fileExtension?: string;
    element?: any;
    children?: Array<GridSheetProps>;
}

interface GridSheetProps {
    name: string;
    data?: Array<object>;
    dataSet?: Array<GridSheetData>;
    value?: Array<string> | Function;
    children?: Array<GridColumnProps>
}

interface GridSheetData {
    xSteps?: number;
    ySteps?: number;
    columns: Array<string>;
    data: Array<GridCellData>;
}

type GridCellData = GridValue | GridCell;
type GridValue = string | number | Date | boolean;

interface GridCell {
    value: GridCell;
    style: GridStyle;
}

interface GridColumnProps {
    label: string;
    value: number | boolean | string | Function;
}

interface GridStyle {
    fill?: GridCellFillType;
    font?: GridFont;
    numFmt?: GridNumFormat;
    alignment?: GridAlignment;
    border?: GridBorder;
}

/* GridCell Fill Type */
type GridCellPatternType = "solid" | "none";

interface GridColorSpec {
    auto?: number; //default 1
    rgb?: string; //hex ARGB color
    theme?: GridTheme;
    indexed?: number;
}

interface GridTheme {
    theme: string;
    tint: string;
}

interface GridCellFillType {
    patternType?: GridCellPatternType;
    fgColor?: GridColorSpec;
    bgColor?: GridColorSpec;
}

/* Grid Font */
interface GridFont {
    name?: string;          // default `"Calibri"`
    sz?: number;             //font size in points default 11
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
type GridNumFormat = "0" | "0.00%" | "0.0%" | "0.00%;\\(0.00%\\);\\-;@" | "m/dd/yy" | string;

/* GridAlignment */
interface GridAlignment {
    vertical?: GridAlignmentType;
    horizontal?: GridAlignmentType;
    wrapText?: boolean;
    readingOrder?: GridReadingOrder;
    textRotation?: GridTextRotation;
}

type GridTextRotation = 0 | 45 | 90 | 135 | 180 | 255;

enum GridReadingOrder { LeftToRight = 1, RightToLeft}

type GridAlignmentType = "bottom" | "center" | "top";

/* GridBorder */
interface GridBorder {
    style: GridBorderStyle;
    color: GridColorSpec;
}

type GridBorderStyle = "thin" | "medium" | "thick" | "dotted" | "hair" | "dashed" | "mediumDashed" | "dashDot" | "mediumDashDot" | "dashDotDot" | "mediumDashDotDot" | "slantDashDot";
```
