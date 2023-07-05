import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

const USER_DATA = [
  { name: 'John Smith', occupation: 'Advisor', age: 36, pp: '5' },
  { name: 'Muhi Masri', occupation: 'Developer', age: 28, pp: '5' },
  { name: 'Peter Adams', occupation: 'HR', age: 20, pp: '5' },
  { name: 'Lora Bay', occupation: 'Marketing', age: 43, pp: '5' },
];
const COLUMNS_SCHEMA: TableColumnSchema[] = [
  {
    key: 'name',
    //type: 'text',
    label: 'Full Name',
  },
  {
    key: 'occupation',
    //type: 'text',
    label: 'Occupation',
  },
  {
    key: 'age',
    //type: 'number',
    label: 'Age',
  },
  {
    key: 'pp',
    //type: 'text',
    label: 'PP',
  },
];

export class TableColumnSchema {
  key: string;
  //type: string;
  label: string;

  constructor(key: string, label: string) {
    this.key = key;
    this.label = label;
  }

  public static CreateColumnsSchema(
    object: Object,
    labels: string[]
  ): TableColumnSchema[] {
    let array = Object.getOwnPropertyNames(object);
    let tableColumnsSchema: TableColumnSchema[] = [];
    for (let index = 0; index < labels.length; index++) {
      tableColumnsSchema.push(
        new TableColumnSchema(array[index], labels[index])
      );
    }
    return tableColumnsSchema;
  }
}
@Component({
  selector: 'material-table',
  styleUrls: ['material-table.less'],
  templateUrl: 'material-table.html',
  standalone: true,
  imports: [MatTableModule, NgIf, NgFor],
})
export class MaterialTable implements OnInit {
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  @Input() dataSource: any = USER_DATA;
  @Input() columnsSchema: TableColumnSchema[] = COLUMNS_SCHEMA;

  ngOnInit(): void {
    this.displayedColumns = this.columnsSchema.map((col) => col.key);
  }
}
