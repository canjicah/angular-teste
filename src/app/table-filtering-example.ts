import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  kWh: number;
  faturas: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { faturas: 'Fatura 01/2022', kWh: 179, icon: '' },
  { faturas: 'Fatura 02/2022', kWh: 426, icon: '' },
  { faturas: 'Fatura 03/2022', kWh: 450, icon: '' },
  { faturas: 'Fatura 04/2022', kWh: 450, icon: '' },
  { faturas: 'Fatura 05/2022', kWh: 450, icon: '' },
  { faturas: 'Fatura 06/2022', kWh: 450, icon: '' },
  { faturas: 'Fatura 07/2022', kWh: 450, icon: '' },
  { faturas: 'Fatura 08/2022', kWh: 450, icon: '' },
  { faturas: 'Fatura 09/2022', kWh: 450, icon: '' },
  { faturas: 'Fatura 10/2022', kWh: 450, icon: '' },
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample {
  displayedColumns: string[] = ['faturas', 'kWh', 'icon'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
