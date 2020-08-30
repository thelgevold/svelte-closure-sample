import { Column } from './column';

export class Row {
  constructor(rowIndex, columnCount) {
    this.columns = [];
    this.rowIndex = rowIndex;
    this.columnCount = columnCount;

    for (let j = 0; j < this.columnCount; j++) {
      this.columns.push(new Column(j, this.rowIndex));
    }
  }
}