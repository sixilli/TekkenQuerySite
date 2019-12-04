import { AfterViewInit, Component,  ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material';
import { DataTableItem } from '../models/data-table-model';
import { DbService } from './database-service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})

export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableItem>;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['Command', 'HitLevel', 'Damage', 'StartUpFrames', 'BlockFrames', 'HitFrames', 'CounterHitFrames', 'Notes'];

  constructor(private db: DbService) { }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  ngAfterViewInit() {
    this.db.getCharacterFrames('Lucky Chloe').subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    })
  }

  drawerUpdate($event) {
    console.log('Event Update Triggered: ' + $event);
    this.db.getCharacterFrames($event).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    })
  }
  ngOnDestroy() {
  }
}
