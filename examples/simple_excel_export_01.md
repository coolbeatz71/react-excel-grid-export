## Simple Grid Export

```javascript
import React from "react";
import ReactExport from "react-data-export";

const GridFile = ReactExport.GridFile;
const GridSheet = ReactExport.GridFile.GridSheet;
const GridColumn = ReactExport.GridFile.GridColumn;

const dataSet1 = [
  {
    name: "Johson",
    amount: 30000,
    sex: "M",
    is_married: true,
  },
  {
    name: "Monika",
    amount: 355000,
    sex: "F",
    is_married: false,
  },
  {
    name: "John",
    amount: 250000,
    sex: "M",
    is_married: false,
  },
  {
    name: "Josef",
    amount: 450500,
    sex: "M",
    is_married: true,
  },
];

const dataSet2 = [
  {
    name: "Johnson",
    total: 25,
    remainig: 16,
  },
  {
    name: "Josef",
    total: 25,
    remainig: 7,
  },
];

class Download extends React.Component {
  render() {
    return (
      <GridFile>
        <GridSheet data={dataSet1} name="Employees">
          <GridColumn label="Name" value="name" />
          <GridColumn label="Wallet Money" value="amount" />
          <GridColumn label="Gender" value="sex" />
          <GridColumn
            label="Marital Status"
            value={(col) => (col.is_married ? "Married" : "Single")}
          />
        </GridSheet>
        <GridSheet data={dataSet2} name="Leaves">
          <GridColumn label="Name" value="name" />
          <GridColumn label="Total Leaves" value="total" />
          <GridColumn label="Remaining Leaves" value="remaining" />
        </GridSheet>
      </GridFile>
    );
  }
}
```

## Output

![Simple Grid Export](https://i.imgur.com/6fwdJeo.png)
