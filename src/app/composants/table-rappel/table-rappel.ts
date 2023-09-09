import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CasierTablePojo } from '../../models/casier-table-pojo';
import { TableRappelService } from '../service/table-rappel.service';

@Component({
    selector: 'table-rappel',
    templateUrl: './table-rappel.html',
    styleUrls: ['./table-rappel.less']
  })
  export class TableRappelComposant implements OnInit {
    
    public tableRappel: CasierTablePojo[] = [];

  
    constructor(private tableRappelService: TableRappelService) {}
  
    public ngOnInit(): void {
      this.firstLoad();
    }
  
    firstLoad() {
      this.tableRappelService.getTableRappelMock().subscribe(
        (data) => {
          this.tableRappel = data;
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    }
  }