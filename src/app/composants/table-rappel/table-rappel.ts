import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CasierTablePojo } from '../../models/casier-table-pojo';
import { TableRappelService } from '../service/table-rappel.service';
import { Observable } from 'rxjs';

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
      let $ : Observable<CasierTablePojo[]> = this.tableRappel.length === 0 ? 
      this.tableRappelService.getTableRappelMock() : this.tableRappelService.getTableDeRappelLocalStorage();

    $.subscribe(
        (data) => {
          this.tableRappel = data;
          // test
          this.tableRappelService.storeNewTable(data);
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    }
  }